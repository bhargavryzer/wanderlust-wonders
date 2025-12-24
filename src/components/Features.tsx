const features = [
  {
    title: "Native regulatory alignment.",
    description: "Praxis ensures compliance, governance, privacy, and interoperability are built-in by default—essential for institutional adoption.",
  },
  {
    title: "On-chain governance.",
    description: "Embedded controls provide on-chain governance and off-chain legal enforceability, bridging digital assets with real-world trust.",
  },
  {
    title: "Atomic settlement.",
    description: "Enables instant, atomic settlement across assets and cash, ensuring privacy, control, and full lifecycle management.",
  },
];

const Features = () => {
  return (
    <section id="why" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8 rounded-lg bg-card hover:bg-secondary/50 transition-all duration-300 h-full border border-border/50 hover:border-border">
                <h3 className="font-serif text-xl md:text-2xl font-normal mb-4 group-hover:text-foreground transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
