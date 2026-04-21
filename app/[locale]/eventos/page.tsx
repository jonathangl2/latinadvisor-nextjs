import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl, API_URL } from "@/lib/url";
import { getDictionary, type Locale } from '@/lib/i18n';
import { Metadata } from "next";
import EventsContainer from "@/components/EventsContainer";

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
  return {
    title: "Eventos | LatinAdvisor",
    description: "Eventos y conferencias sobre migración a Australia",
  };
}

// ========== HELPER: EXTRAER MESES ÚNICOS ==========

function getAvailableMonths(events: any[], locale: string) {
  const monthsSet = new Map<string, { year: number; month: number; label: string }>();
  
  events.forEach((event) => {
    const date = new Date(event.date_event);
    const year = date.getFullYear();
    const month = date.getMonth();
    const key = `${year}-${month}`;
    
    if (!monthsSet.has(key)) {
      const monthName = date.toLocaleString(locale, { month: 'long' });
      const label = `${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${year}`;
      
      monthsSet.set(key, { year, month, label });
    }
  });
  
  return Array.from(monthsSet.values()).sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return b.month - a.month;
  });
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

  const availableMonths = getAvailableMonths(events, locale);

  return (
    <>
      <BannerInterno
        locale={locale}
        imageSrc={getAssetUrl("/assets/images/banners/eventos.webp")}
        title={dict.pages.events.title_caption}
        className="internal_page"
      />

      <section className="container-events container-fluid py-5">
        <div className="container">
          
          {events.length > 0 ? (
            <EventsContainer
              availableMonths={availableMonths}
              events={events}
              locale={locale}
              dict={dict}
            />
          ) : (
            <div className="row">
              <div className="col-12 text-center py-5">
                <p>{dict.pages.events.not_found}</p>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}