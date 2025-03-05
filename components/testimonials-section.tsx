"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

const testimonials = [
  {
    quote: "Mount Arc transformed our outdated website into a modern, user-friendly platform that has significantly increased our online conversions. Their team was professional, responsive, and delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    quote: "The mobile app developed by Mount Arc has revolutionized how we interact with our customers. The intuitive design and seamless functionality have received overwhelmingly positive feedback from our user base.",
    author: "Michael Chen",
    position: "Product Director, InnovateCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    quote: "Working with Mount Arc was a game-changer for our startup. Their strategic approach to our web presence helped us establish credibility in a competitive market and attract our first major investors.",
    author: "Emily Rodriguez",
    position: "Founder, GrowthLab",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with Mount Arc.
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-lg bg-card">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].author}
                        className="rounded-full object-cover w-full h-full"
                      />
                      <div className="absolute -top-3 -left-3 bg-chart-1 rounded-full p-2">
                        <Quote className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg md:text-xl italic mb-6">"{testimonials[current].quote}"</p>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonials[current].author}</h4>
                        <p className="text-muted-foreground">{testimonials[current].position}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}