import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Geometric shapes */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up">
          <div className="w-5 h-5 bg-foreground rounded-sm" />
          <div className="w-5 h-5 bg-foreground rounded-full" />
          <div 
            className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-foreground"
          />
        </div>
        
        {/* Main headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4 animate-fade-up animation-delay-100">
          The Infrastructure Layer for Regulated Digital Assets
        </h1>
        
        {/* Subheadline */}
        <p className="font-serif text-xl md:text-2xl lg:text-3xl text-muted-foreground italic mb-10 animate-fade-up animation-delay-200">
          Programmable, compliant, and built for trust.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up animation-delay-300">
          <Button variant="hero" size="lg">
            Get Started Now
          </Button>
          <Button variant="heroOutline" size="lg">
            See How It Works
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-muted-foreground animate-fade-up animation-delay-400">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-muted-foreground/60 rounded-sm" />
            <span className="text-sm">Trusted by Global Institutions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-muted-foreground/60 rounded-full" />
            <span className="text-sm">Securing Digital Markets</span>
          </div>
          <div className="flex items-center gap-3">
            <div 
              className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-muted-foreground/60"
            />
            <span className="text-sm">Partnerships for Innovation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
