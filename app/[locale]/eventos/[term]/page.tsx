import { notFound } from "next/navigation";
import { Metadata } from "next";
import { API_URL } from "@/lib/url";
import { getDictionary, locales, type Locale } from '@/lib/i18n';
import EventIframe from '@/components/EventIframe';

// ========== DATA FETCHING ==========
// ========== DATA FETCHING ==========

async function getAllEventsFromStrapi() {
  try {
    const allEvents = [];
    
    // Obtener eventos de cada locale por separado
    for (const locale of ['es', 'en']) {
      const url = `${API_URL}/api/events?populate=*&locale=${locale}&pagination[pageSize]=100`;
      
      console.log(`🔍 Fetching ${locale} events from:`, url);
      
      const res = await fetch(url, { 
        cache: 'no-store',
      });

      if (!res.ok) {
        console.error(`❌ Response not OK for ${locale}:`, res.status);
        continue;
      }

      const data = await res.json();
      const events = data.data || [];
      
      console.log(`✅ ${locale.toUpperCase()} events fetched:`, events.length);
      
      // Agregar todos los eventos de este locale
      allEvents.push(...events);
    }
    
    console.log(`📊 Total events across all locales:`, allEvents.length);
    
    // Debug: mostrar qué eventos se obtuvieron
    if (allEvents.length > 0) {
      console.log('📋 Events list:');
      allEvents.forEach((event: any) => {
        console.log(`  - [${event.locale}] ${event.slug}`);
      });
    }
    
    return allEvents;

  } catch (err) {
    console.error("❌ Error fetching all events:", err);
    return [];
  }
}

async function getEventFromStrapi(slug: string, locale: string) {
  try {
    const url = `${API_URL}/api/events?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`;
    
    console.log('🔍 Fetching event:', { slug, locale });

    const res = await fetch(url, { 
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("❌ Response not OK:", res.status);
      return null;
    }

    const data = await res.json();
    const event = data.data?.[0] || null;
    
    console.log(event ? '✅ Event found' : '❌ Event NOT FOUND');
    
    return event;

  } catch (err) {
    console.error("❌ Error fetching event:", err);
    return null;
  }
}

// ========== STATIC PARAMS ==========

export async function generateStaticParams() {
  try {
    console.log('🚀 Generating static params for events...');
    
    // Obtener TODOS los eventos
    const events = await getAllEventsFromStrapi();
    
    if (!events || events.length === 0) {
      console.warn('⚠️ WARNING: No events found! Check if events are published in Strapi.');
      return [];
    }
    
    // Generar params para cada evento con su locale
    const params = events.map((event: any) => {
      if (!event.slug || !event.locale) {
        console.warn('⚠️ Event missing slug or locale:', event);
        return null;
      }
      
      return {
        locale: event.locale,
        term: event.slug,
      };
    }).filter(Boolean); // Eliminar nulls
    
    console.log(`✅ Generated ${params.length} static params:`);
    params.forEach((p: any) => {
      console.log(`  → /${p.locale}/eventos/${p.term}`);
    });
    
    return params;
    
  } catch (err) {
    console.error("❌ Error in generateStaticParams:", err);
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
  const event = await getEventFromStrapi(term, locale);

  if (!event) {
    console.error('❌ Event not found, showing 404');
    notFound();
  }

  const eventLandingUrl = `https://lp.latinadvisor.com.au/${event.slug}`;

  return (
    <section className="section-event-iframe">
      <EventIframe 
        url={eventLandingUrl}
        title={event.title}
      />
    </section>
  );
}