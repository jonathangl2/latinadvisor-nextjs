'use client';

import { useEffect, useRef, useState } from 'react';

interface MetricsPercentageProps {
    percentage: number;
    title: string;
    description: string;
    duration?: number;
    threshold?: number;
}

export default function MetricsPercentage({
    percentage,
    title,
    description,
    duration = 5000,
    threshold = 0.3
}: MetricsPercentageProps) {
    const [animatedValue, setAnimatedValue] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateNumber();
                }
            },
            { threshold }
        );

        // ✅ CLAVE: Verificar que el ref existe antes de observar
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []); // ← SIN dependencias, se ejecuta solo una vez después del mount

    const animateNumber = () => {
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const currentValue = Math.round(percentage * easeProgress);
            setAnimatedValue(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setAnimatedValue(percentage);
            }
        };

        requestAnimationFrame(animate);
    };

    return (
        <div 
            ref={cardRef}
            className="card card-whyChooseUs border-0"
        >
            <div className="card-body px-0">
                <h3 
                    className="card-whyChooseUs_title" 
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <h5 className="card-whyChooseUs_percentage">
                    {animatedValue}%
                </h5>
                <p className="card-whyChooseUs_description mb-0">
                    {description}
                </p>
            </div>
        </div>
    );
}