import { notFound } from "next/navigation";
import BannerInterno from "@/components/BannerInterno";
import { Metadata } from "next";
import { API_URL, getAssetUrl } from "@/lib/url";
import { getDictionary, locales, type Locale } from '@/lib/i18n';
import FormEmbed from "@/components/FormEmbed";

// ========== DATA FETCHING ==========

async function getAllEventsFromStrapi() {
  try {
    const url = `${API_URL}/api/events?populate=*`;
    
    const res = await fetch(url, { 
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.data || [];

  } catch (err) {
    console.error("❌ Error fetching all events:", err);
    return [];
  }
}

async function getEventFromStrapi(slug: string, locale: string) {
  try {
    const url = `${API_URL}/api/events?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`;

    const res = await fetch(url, { 
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("❌ Response not OK:", res.status);
      return null;
    }

    const data = await res.json();
    return data.data?.[0] || null;

  } catch (err) {
    console.error("❌ Error fetching event:", err);
    return null;
  }
}

// ========== STATIC PARAMS ==========

export async function generateStaticParams() {
  try {
    const events = await getAllEventsFromStrapi();
    
    const params = [];
    for (const locale of locales) {
      for (const event of events) {
        params.push({
          locale: locale,
          term: event.slug,
        });
      }
    }
    
    console.log(`✅ Generated ${params.length} static params for events`);
    return params;
    
  } catch (err) {
    console.error("❌ Error generating params:", err);
    return [];
  }
}

// ========== METADATA ==========

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: Locale; term: string }> 
}): Promise<Metadata> {
  const { locale, term } = await params;
  const event = await getEventFromStrapi(term, locale);
  
  if (!event) {
    return {
      title: "Event not found | LatinAdvisor",
    };
  }
  
  return {
    title: `${event.title} | Eventos | LatinAdvisor`,
    description: event.content?.replace(/<[^>]*>/g, "").substring(0, 160) || "",
  };
}

// ========== PAGE COMPONENT ==========

export default async function EventPage({ 
  params 
}: { 
  params: Promise<{ locale: Locale; term: string }> 
}) {
  const { locale, term } = await params;
  const dict = await getDictionary(locale);
  
  const event = await getEventFromStrapi(term, locale);

  if (!event) {
    notFound();
  }

  // Extraer datos del evento
  const bannerImageUrl = event.image_banner?.url || '';
  const featuredImageUrl = event.image_featured?.url || '';
  const eventDate = new Date(event.date_event);
  const isPast = eventDate < new Date();

  // Formatear fecha
  const day = eventDate.getDate().toString().padStart(2, '0');
  const month = eventDate.toLocaleString(locale, { month: 'long' });
  const year = eventDate.getFullYear();
  const time = eventDate.toLocaleTimeString(locale, { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  return (
    <>
      {/* Banner con imagen del evento */}
      <BannerInterno
        imageSrc={bannerImageUrl || featuredImageUrl}
        title=""
        locale={locale}
        className="internal_page banner-event"
      />

      <section className="section-event-detail container-fluid py-5">
        <div className="container">
          <div className="row">
            
            {/* Columna del formulario */}
            <div className="col-12 col-lg-5 order-2 order-lg-1">
              
              {/* Info del evento */}
              <div className="event-info-card bg-light p-4 mb-4 rounded">
                <h4 className="text-uppercase mb-4">
                  {isPast ? 'Evento Finalizado' : '¡Separa tu cupo ahora!'}
                </h4>
                
                {/* Fecha y hora */}
                <div className="event-meta mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <i className="icon icon-calendar me-2"></i>
                    <span><strong>Fecha:</strong> {day} de {month} de {year}</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="icon icon-clock me-2"></i>
                    <span><strong>Hora:</strong> {time}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="icon icon-location me-2"></i>
                    <span><strong>Ciudad:</strong> Brisbane / Online</span>
                  </div>
                </div>

                {/* Descripción corta */}
                <p className="text-muted small mb-0">
                  {dict.pages.eventos?.subtitle || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                </p>
              </div>

              {/* Formulario de registro */}
              {!isPast && event.formSrc && (
                <FormEmbed
                  formSrc={event.formSrc}
                  formName={event.formName}
                  formId={event.formId}
                  formHeight={event.formHeight}
                  title={event.title}
                  titleCard={dict.forms.home.title}
                  subtitleCard={dict.forms.home.subtitle}
                  descriptionCard={dict.forms.home.description}
                />
              )}
            </div>

            {/* Columna del contenido */}
            <div className="col-12 col-lg-7 order-1 order-lg-2 mb-5 mb-lg-0">
              
              {/* Imagen destacada */}
              {featuredImageUrl && (
                <div className="event-featured-image mb-4">
                  <img
                    src={featuredImageUrl}
                    alt={event.title}
                    className="img-fluid rounded"
                  />
                </div>
              )}

              {/* Título del evento */}
              {event.title && (
                <h1 className="event-title mb-4">
                  {event.title}
                </h1>
              )}

              {/* Contenido del evento */}
              {event.content && (
                <div 
                  className="event-content" 
                  dangerouslySetInnerHTML={{ __html: event.content }}
                />
              )}

              {/* Sección de participantes (logos) */}
              <div className="event-participants mt-5 pt-4 border-top">
                <h5 className="mb-3">PARTICIPA:</h5>
                <div className="d-flex gap-3 align-items-center">
                  <img 
                    src={getAssetUrl("/assets/images/logos/logo-latinadvisor.svg")} 
                    alt="LatinAdvisor"
                    height="40"
                  />
                  {/* Agregar más logos si vienen de Strapi */}
                </div>
              </div>

              {/* Info del agente migratorio */}
              <div className="event-agent mt-4 p-4 bg-light rounded">
                <div className="d-flex align-items-center">
                  <div className="agent-photo me-3">
                    <img 
                      src={getAssetUrl("/assets/images/team/placeholder.jpg")} 
                      alt="Agente"
                      className="rounded-circle"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div>
                    <div className="badge bg-success mb-2">NOMBRE AGENTE</div>
                    <p className="mb-0 small">
                      <strong>AGENTE MIGRATORIO</strong><br />
                      MARN (XXXXXX)
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}