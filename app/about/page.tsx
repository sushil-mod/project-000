import { Metadata } from "next";
import TeamSection from "@/components/team-section";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Us | Mount Arc",
  description: "Learn about Mount Arc, our mission, values, and the team behind our tech services",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mount Arc</h1>
            <p className="text-xl text-muted-foreground mb-12">
              We're a team of passionate technologists dedicated to creating exceptional digital experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2018, Mount Arc began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of developers has grown into a full-service digital agency with expertise across web development, mobile applications, UI/UX design, and cloud solutions.
                </p>
                <p className="text-muted-foreground">
                  Over the years, we've partnered with startups, mid-sized businesses, and enterprise organizations across various industries, delivering solutions that drive growth and create meaningful user experiences.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Mount Arc team collaboration"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Our Mission & Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We embrace new technologies and approaches to solve complex problems and create forward-thinking solutions.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    We're committed to delivering high-quality work that exceeds expectations and stands the test of time.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium mb-3">Collaboration</h3>
                  <p className="text-muted-foreground">
                    We believe in working closely with our clients, understanding their needs, and building solutions together.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Our Approach</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-chart-1 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Discovery</h3>
                    <p className="text-muted-foreground">
                      We begin by understanding your business, goals, and challenges to ensure our solution addresses your specific needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-chart-1 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Strategy</h3>
                    <p className="text-muted-foreground">
                      We develop a comprehensive plan that outlines the technical approach, timeline, and resources needed for success.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-chart-1 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Design & Development</h3>
                    <p className="text-muted-foreground">
                      Our team creates intuitive designs and builds robust, scalable solutions using the latest technologies and best practices.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-chart-1 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Testing & Launch</h3>
                    <p className="text-muted-foreground">
                      We rigorously test all aspects of the solution to ensure quality, performance, and security before deployment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-chart-1 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Support & Growth</h3>
                    <p className="text-muted-foreground">
                      Our relationship continues after launch with ongoing support, maintenance, and strategic guidance for future enhancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <CTASection />
    </>
  );
}