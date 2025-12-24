const Architecture = () => {
  return (
    <section id="architecture" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-6 animate-fade-up">
            The Praxis 12-Layer Architecture
          </h2>
          <p className="text-lg text-muted-foreground mb-6 animate-fade-up animation-delay-100">
            Praxis delivers a complete institutional stack spanning legal, technical, and operational layers. From origination to settlement, every step is rigorously engineered for regulated markets.
          </p>
          <p className="text-muted-foreground animate-fade-up animation-delay-200">
            Key layers include Asset Origination, Legal Frameworks, IAM, Compliance, Tokenisation, Privacy, Governance, Settlement, Custody, Audit, Integration, and User Experience. Each layer is purpose-built for secure, compliant operations.
          </p>
        </div>

        {/* Architecture visual placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-up animation-delay-300">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i}
              className="aspect-square bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-secondary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-2xl font-serif text-muted-foreground">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
