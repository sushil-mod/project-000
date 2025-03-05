import { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio-grid";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Portfolio | Mount Arc",
  description: "Explore our portfolio of web and mobile projects showcasing our expertise in digital solutions",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our diverse range of projects that showcase our expertise and creativity in digital solutions.
            </p>
          </div>
        </div>
      </section>

      <PortfolioGrid />
      <CTASection />
    </>
  );
}