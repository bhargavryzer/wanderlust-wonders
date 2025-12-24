const partners = [
  { category: "Modernising Infrastructure", name: "Banks & Asset Managers" },
  { category: "Regulatory Pilots", name: "Regulators" },
  { category: "Compliant Tokenisation", name: "Market Operators" },
  { category: "Institutional Rails", name: "Fund Administrators" },
  { category: "Trust, Control, Longevity", name: "Institutions" },
  { category: "Digital Asset Platforms", name: "Custodians & Trustees" },
];

const Partners = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="p-6 rounded-lg bg-card border border-border/30 hover:border-border hover:shadow-md transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {partner.category}
              </span>
              <p className="font-medium mt-2 text-foreground/90">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
