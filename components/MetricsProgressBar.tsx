'use client';

import { useEffect, useRef, useState } from 'react';

type MetricBar = {
  name: string;
  value: number;
};

type Props = {
  metrics: MetricBar[];
  title?: string;
};

export default function MetricsProgressBar({ metrics, title }: Props) {
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
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

    barRefs.current.forEach((ref) => {
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
      {title && (
        <h4 className="mt-2 mb-4">
          <strong>{title}</strong>
        </h4>
      )}

      {metrics.map((item, index) => (
        <div className="row" key={index}>
          <div className="col-12">
            <h5>
              <span>{item.name}</span>
            </h5>
          </div>
          <div className="col-12 d-flex pe-lg-5">
            <div
              ref={(el) => {
                barRefs.current[index] = el;
              }}
              data-index={index}
              className={`progress-container mt-2 mb-3 ${animatedStates[index] ? 'animate' : ''}`}
              role="progressbar"
              aria-label={item.name}
              aria-valuenow={item.value}
              aria-valuemin={0}
              aria-valuemax={100}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ '--bar-value': `${item.value}%` } as React.CSSProperties}
                ></div>
              </div>
            </div>
            <h5 className="mt-1 px-3 mb-0">{item.value}%</h5>
          </div>
        </div>
      ))}
    </>
  );
}