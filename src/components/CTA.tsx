import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="demo" className="py-32 px-6 bg-card">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-6 animate-fade-up">
          Build the Future of Finance
        </h2>
        <p className="text-lg text-muted-foreground mb-10 animate-fade-up animation-delay-100">
          Praxis powers regulated digital asset infrastructure.
        </p>
        <Button variant="hero" size="lg" className="animate-fade-up animation-delay-200">
          Request a Private Demo
        </Button>
      </div>
    </section>
  );
};

export default CTA;
