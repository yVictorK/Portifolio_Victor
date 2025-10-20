import { useEffect, useRef } from "react";

export const ScrollFadeIn = ({ children }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("animate-section-fadein");
        }else{
          if(ref.current){
            ref.current.classList.remove("animate-section-fadein");
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="opacity-0 min-h-[200px]">
      {children}
    </div>
  );
};
