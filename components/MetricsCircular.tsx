'use client';

import { useEffect, useRef, useState } from 'react';

type MetricCircular = {
  name: string;
  value: number;
};

type Props = {
  metrics: MetricCircular[];
};

export default function MetricsCircular({ metrics }: Props) {
  const circularRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [animatedStates, setAnimatedStates] = useState<boolean[]>(
    new Array(metrics.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setAnimatedStates((prev) => {
              const newStates = [...prev];
              newStates[index] = true;
              return newStates;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    circularRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (index: number) => {
    setAnimatedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });

    setTimeout(() => {
      setAnimatedStates((prev) => {
        const newStates = [...prev];
        newStates[index] = true;
        return newStates;
      });
    }, 50);
  };

  return (
    <>
      <div className="row section-australiaMigration_metricsProgressCircle">
        {metrics.map((item, index) => (
          <div className="col col-sm-6 px-2 mb-3 container-progressCircle" key={index}>
            <div className="card card-progressCircle">
              <div className="card-body d-flex align-items-center">
                <div
                  ref={(el) => {
                    circularRefs.current[index] = el;
                  }}
                  data-index={index}
                  className={`progress-circle ${animatedStates[index] ? 'animate' : ''}`}
                  style={{ '--value': `${item.value}` } as React.CSSProperties}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <span>{item.value}%</span>
                </div>
                <h5 className="ps-3 mb-0">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}