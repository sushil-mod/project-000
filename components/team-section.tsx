"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import ScrollAnimation from "@/components/scroll-animation";

const team = [
  {
    name: "Alex Morgan",
    position: "Founder & CEO",
    bio: "With over 15 years of experience in tech leadership, Alex founded Mount Arc with a vision to create digital solutions that drive real business results.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Sophia Chen",
    position: "Lead Designer",
    bio: "Sophia brings creativity and user-centered thinking to every project, ensuring our solutions are not just functional but delightful to use.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Marcus Johnson",
    position: "Technical Director",
    bio: "Marcus oversees our development team, bringing technical excellence and innovation to every solution we build for our clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Olivia Martinez",
    position: "Project Manager",
    bio: "Olivia ensures our projects are delivered on time and on budget, while maintaining clear communication with our clients throughout the process.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The talented individuals behind Mount Arc who bring expertise, passion, and creativity to every project.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="overflow-hidden h-full">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-chart-1 mb-2">{member.position}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter size={18} />
                    </Link>
                    <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin size={18} />
                    </Link>
                    <Link href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </Link>
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