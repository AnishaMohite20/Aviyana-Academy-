import { useState, useEffect, RefObject } from 'react';

interface ObserverOptions {
    threshold?: number;
    triggerOnce?: boolean;
}

export const useIntersectionObserver = (
    elementRef: RefObject<Element>,
    {
        threshold = 0.1,
        triggerOnce = true,
    }: ObserverOptions = {}
): boolean => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = elementRef?.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(entry.target);
                    }
                }
            },
            { threshold }
        );

        observer.observe(node);

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, [elementRef, threshold, triggerOnce]);

    return isVisible;
};
