const Testimonial = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <blockquote className="animate-fade-up">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mb-8 text-foreground/90">
            "Praxis embeds multi-party approvals and robust controls. Actions are always permissioned, visible to auditors, and legally accountable."
          </p>
          <footer className="text-muted-foreground">
            <cite className="not-italic font-medium">Senior Compliance Officer</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial;
