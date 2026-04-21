'use client';

import { useState, useMemo } from 'react';
import EventsMonthFilter from './EventsMonthFilter';
import Link from 'next/link';

interface AvailableMonth {
  year: number;
  month: number;
  label: string;
}

interface EventsContainerProps {
  availableMonths: AvailableMonth[];
  events: any[];
  locale: string;
  dict: any;
}

export default function EventsContainer({ 
  availableMonths, 
  events, 
  locale, 
  dict 
}: EventsContainerProps) {
  
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  // Filtrar eventos
  const filteredEvents = useMemo(() => {
    if (selectedMonth === 'all') {
      return events;
    }

    const [year, month] = selectedMonth.split('-').map(Number);
    
    return events.filter((event: any) => {
      const eventDate = new Date(event.date_event);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });
  }, [selectedMonth, events]);

  return (
    <>
      {/* Filtro */}
      {availableMonths.length > 0 && (
        <EventsMonthFilter
          availableMonths={availableMonths}
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
          dict={dict}
        />
      )}

      {/* Grid de eventos */}
      {filteredEvents.length > 0 && (
        <div className="row g-4">
          {filteredEvents.map((event: any) => {
            const eventDate = new Date(event.date_event);
            const isPast = eventDate < new Date();

            return (
              <div key={event.id} className="col-12 col-md-6 col-lg-4">
                <EventCard 
                  event={event} 
                  locale={locale} 
                  dict={dict}
                  isPast={isPast}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Sin resultados */}
      {filteredEvents.length === 0 && (
        <div className="row">
          <div className="col-12 text-center py-5">
            <p>{dict.pages.events.not_found}</p>
          </div>
        </div>
      )}
    </>
  );
}

// ========== COMPONENTE CARD ==========

function EventCard({ 
  event, 
  locale, 
  dict,
  isPast = false 
}: { 
  event: any; 
  dict: any;
  locale: string;
  isPast?: boolean;
}) {
  return (
    <div className={`card card-event h-100 ${isPast ? 'event-past' : ''}`}>
      {event.image_featured?.url && (
        <div className="card-header">
          <img 
            src={event.image_featured.url} 
            alt={event.title}
            className="card-img-top"
          />
          {isPast && (
            <div className="event-status-badge position-absolute top-0 end-0 m-3">
              <span className="badge bg-secondary">{dict.pages.events.finished}</span>
            </div>
          )}
        </div>
      )}

      <div className="card-body">
        <h5 className="card-title mb-3">{event.title}</h5>

        <div className="event-meta my-3 pb-2 d-flex flex-wrap gap-2">
          <span className="text-muted me-2">{dict.pages.events.presencial}</span>
          <span className="text-muted">{dict.pages.events.free}</span>
        </div>

        {!isPast && (
          <Link  
            href={`/${locale}/eventos/${event.slug}`}  
            className='btn w-auto btn-blue-dark text-uppercase'
          >
            {dict.pages.events.btn_register}
          </Link>
        )}
      </div>
    </div>
  );
}