"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@/components/scroll-animation";

export default function CTASection() {
  return (
    <section className="py-20 bg-chart-1/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}