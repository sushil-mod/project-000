"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, MotionValue, useMotionValue, useTransform, animate } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "@/components/scroll-animation";

const stats = [
  { value: 150, label: "Projects Completed", suffix: "+" },
  { value: 50, label: "Happy Clients", suffix: "+" },
  { value: 5, label: "Years Experience", suffix: "" },
  { value: 99, label: "Client Satisfaction", suffix: "%" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-muted-foreground">
              We've helped businesses of all sizes achieve their digital goals. Here's a snapshot of our journey.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="border-none shadow-md bg-card h-full">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-4xl md:text-5xl font-bold text-chart-1 mb-2">
                      {isInView ? (
                        <Counter from={0} to={stat.value} duration={2} />
                      ) : (
                        "0"
                      )}
                      {stat.suffix}
                    </div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

type CounterProps = {
  from: number;
  to: number;
  duration?: number;
  decimals?: number;
};

function Counter({ from, to, duration = 2, decimals = 0 }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Number(latest).toFixed(decimals));

  useEffect(() => {
    const controls = animate(count, to, { duration }); // ✅ Correct way to animate
    return controls.stop; // Cleanup function
  }, [to, count, duration]);

  return <motion.span>{rounded}</motion.span>;
}