"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

const categories = ["All", "Web", "Mobile", "UI/UX", "E-commerce"];

const projects = [
  {
    id: 1,
    title: "TechVision E-commerce Platform",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "A comprehensive e-commerce solution for a leading tech retailer, featuring advanced product filtering, user accounts, and secure payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "HealthTrack Mobile App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1684&q=80",
    description: "A fitness and health tracking mobile application that allows users to monitor workouts, nutrition, and wellness metrics with personalized insights.",
    technologies: ["React Native", "Firebase", "Redux", "HealthKit"],
    link: "#"
  },
  {
    id: 3,
    title: "FinanceFlow Dashboard",
    category: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "An intuitive financial management dashboard for a fintech startup, providing real-time data visualization and transaction analysis.",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    link: "#"
  },
  {
    id: 4,
    title: "EcoTravel Booking Platform",
    category: "Web",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1642&q=80",
    description: "A sustainable travel booking platform that helps users find eco-friendly accommodations and transportation options worldwide.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "Mapbox"],
    link: "#"
  },
  {
    id: 5,
    title: "CreativeStudio Design System",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1764&q=80",
    description: "A comprehensive design system for a creative agency, ensuring consistent branding and user experience across all digital products.",
    technologies: ["Figma", "Storybook", "React", "Styled Components"],
    link: "#"
  },
  {
    id: 6,
    title: "FoodDelivery Mobile App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1628&q=80",
    description: "A food delivery application connecting local restaurants with customers, featuring real-time order tracking and personalized recommendations.",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
    link: "#"
  }
];
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
};

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground">
              Explore our diverse range of projects that showcase our expertise and creativity in digital solutions.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollAnimation>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 0.1}>
                <Card 
                  className="overflow-hidden cursor-pointer group h-full"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white">
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2">{project.category}</Badge>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </motion.div>
        </AnimatePresence>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription>
                    <Badge className="mt-2">{selectedProject.category}</Badge>
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <div className="rounded-lg overflow-hidden mb-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="space-y-4">
                    <p>{selectedProject.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button asChild>
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                          Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}