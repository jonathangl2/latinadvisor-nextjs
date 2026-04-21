import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl, API_URL } from "@/lib/url";
import { getDictionary, type Locale } from '@/lib/i18n';
import { Metadata } from "next";
import Link from "next/link";

// ========== DATA FETCHING ==========

async function getAllEventsFromStrapi(locale: string) {
  try {
    const url = `${API_URL}/api/events?locale=${locale}&populate=*&sort=date_event:desc`;
    
    const res = await fetch(url, { 
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.data || [];

  } catch (err) {
    console.error("❌ Error fetching events:", err);
    return [];
  }
}

// ========== METADATA ==========

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: Locale }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: "Eventos | LatinAdvisor",
    description: "Eventos y conferencias sobre migración a Australia",
  };
}

// ========== PAGE COMPONENT ==========

export default async function EventosPage({ 
  params 
}: { 
  params: Promise<{ locale: Locale }> 
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const events = await getAllEventsFromStrapi(locale);

  // Separar eventos por estado (finalizados vs activos)
  const now = new Date();
  const activeEvents = events.filter((event: any) => {
    const eventDate = new Date(event.date_event);
    return eventDate >= now;
  });
  
  const pastEvents = events.filter((event: any) => {
    const eventDate = new Date(event.date_event);
    return eventDate < now;
  });

  return (
    <>
      <BannerInterno
        imageSrc={getAssetUrl("/assets/images/banners/eventos.webp")}
        title="EVENTOS"
        className="internal_page"
      />

      <section className="section-eventos container-fluid py-5">
        <div className="container">
          
          {/* Filtro por año (opcional - implementar si necesitas) */}
          <div className="row mb-4">
            <div className="col-12 text-center">
              <select className="form-select w-auto mx-auto">
                <option value="2025">Enero 2025</option>
                <option value="2026" selected>Enero 2026</option>
              </select>
            </div>
          </div>

          {/* Grid de eventos activos */}
          {activeEvents.length > 0 && (
            <>
              <div className="row mb-5">
                <div className="col-12">
                  <h3 className="text-center mb-4">Próximos Eventos</h3>
                </div>
              </div>
              
              <div className="row g-4">
                {activeEvents.map((event: any) => (
                  <div key={event.id} className="col-12 col-md-6 col-lg-4">
                    <EventCard event={event} locale={locale} />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Grid de eventos pasados */}
          {pastEvents.length > 0 && (
            <>
              <div className="row mt-5 mb-4">
                <div className="col-12">
                  <h3 className="text-center mb-4">Eventos Finalizados</h3>
                </div>
              </div>
              
              <div className="row g-4">
                {pastEvents.map((event: any) => (
                  <div key={event.id} className="col-12 col-md-6 col-lg-4">
                    <EventCard event={event} locale={locale} isPast={true} />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Sin eventos */}
          {events.length === 0 && (
            <div className="row">
              <div className="col-12 text-center py-5">
                <p>No hay eventos programados en este momento.</p>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}

// ========== COMPONENTE CARD ==========

function EventCard({ 
  event, 
  locale, 
  isPast = false 
}: { 
  event: any; 
  locale: string;
  isPast?: boolean;
}) {
  const eventDate = new Date(event.date_event);
  const day = eventDate.getDate().toString().padStart(2, '0');
  const month = eventDate.toLocaleString(locale, { month: 'short' }).toUpperCase();

  return (
    <div className={`card event-card h-100 ${isPast ? 'event-past' : ''}`}>
      {/* Imagen destacada */}
      {event.image_featured?.url && (
        <div className="card-img-top-wrapper position-relative">
          <img 
            src={event.image_featured.url} 
            alt={event.title}
            className="card-img-top"
          />
          {/* Badge de fecha */}
          <div className="event-date-badge position-absolute top-0 start-0 m-3">
            <div className="badge-day">{day}</div>
            <div className="badge-month">{month}</div>
          </div>
          {isPast && (
            <div className="event-status-badge position-absolute top-0 end-0 m-3">
              <span className="badge bg-secondary">FINALIZADO</span>
            </div>
          )}
        </div>
      )}

      <div className="card-body">
        {/* Título */}
        <h5 className="card-title mb-3">
          {event.title}
        </h5>

        {/* Descripción corta */}
        <div 
          className="card-text text-muted mb-3"
          dangerouslySetInnerHTML={{ 
            __html: event.content?.substring(0, 150) + '...' || ''
          }}
        />

        {/* Tipo de evento */}
        <div className="event-meta mb-3">
          <span className="badge bg-primary me-2">Evento Presencial</span>
          <span className="text-muted small">Sin Costo</span>
        </div>

        {/* Botón CTA */}
        <Link 
          href={`/${locale}/eventos/${event.slug}`}
          className={`btn w-100 ${isPast ? 'btn-outline-secondary' : 'btn-primary'}`}
        >
          {isPast ? 'VER DETALLES' : '¡REGÍSTRATE AHORA!'}
        </Link>
      </div>
    </div>
  );
}