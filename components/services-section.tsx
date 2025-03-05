"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Palette, Cloud, Database, Lock } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

const services = [
  {
    icon: <Globe className="h-10 w-10 text-chart-1" />,
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies for optimal performance and user experience."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-chart-1" />,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android that deliver seamless experiences across devices."
  },
  {
    icon: <Palette className="h-10 w-10 text-chart-1" />,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create intuitive and engaging interfaces."
  },
  {
    icon: <Cloud className="h-10 w-10 text-chart-1" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services that optimize performance, security, and cost-efficiency."
  },
  {
    icon: <Database className="h-10 w-10 text-chart-1" />,
    title: "Database Management",
    description: "Robust database design, optimization, and maintenance to ensure data integrity and performance."
  },
  {
    icon: <Lock className="h-10 w-10 text-chart-1" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance with regulations."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              We offer a comprehensive range of technology solutions to help your business thrive in the digital landscape.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}