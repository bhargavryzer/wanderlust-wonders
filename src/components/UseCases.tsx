const categories = [
  {
    label: "Funds",
    title: "Tokenised Funds & Securities",
  },
  {
    label: "Real Estate",
    title: "Infrastructure & Property",
  },
  {
    label: "Alternatives",
    title: "Private Markets & Capital",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div 
              key={category.label}
              className="text-center p-8 rounded-lg bg-background hover:shadow-lg transition-all duration-300 border border-border/30 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                {category.label}
              </span>
              <h3 className="font-serif text-xl md:text-2xl mt-3">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
