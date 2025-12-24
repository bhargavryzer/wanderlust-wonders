const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-16">
          <a href="/" className="font-serif text-xl font-bold tracking-tight">
            Praxis<sup className="text-xs">®</sup>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Why Praxis
            </a>
            <a href="#architecture" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Architecture
            </a>
          </div>
          
          <a 
            href="#demo" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Request Demo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
