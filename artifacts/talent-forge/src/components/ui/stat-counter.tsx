import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function StatCounter({ end, suffix = "", prefix = "", label, duration = 2 }: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endVal = end;
      const totalFrames = Math.round(duration * 60);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(endVal * (1 - Math.pow(1 - progress, 3))); // easeOutCubic
        setCount(currentCount);

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 glass-card">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{label}</div>
    </div>
  );
}
