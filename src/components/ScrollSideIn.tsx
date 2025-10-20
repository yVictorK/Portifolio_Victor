import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

interface ScrollSideInProps {
  children: React.ReactNode;
  side?: "left" | "right";
}

export const ScrollSideIn = ({ children, side = "left" }: ScrollSideInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const className = side === "left"
            ? "animate-sidein-left"
            : "animate-sidein-right";
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add(className);
        } else {
          if (ref.current) {
            ref.current.classList.remove(className);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [side]);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 min-h-[200px]"
      )}
    >
      {children}
    </div>
  );
};
