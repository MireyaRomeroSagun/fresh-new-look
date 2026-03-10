import { BookOpen, Feather, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="font-heading text-2xl font-semibold text-foreground tracking-wide">
          El Umbral
        </a>
        <div className="flex items-center gap-8">
          <a href="#explorar" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <BookOpen size={16} />
            <span className="hidden sm:inline">Explorar</span>
          </a>
          <a href="#escribir" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Feather size={16} />
            <span className="hidden sm:inline">Escribir</span>
          </a>
          <button className="text-muted-foreground hover:text-primary transition-colors">
            <Search size={18} />
          </button>
          <span className="monogram flex h-9 w-9 items-center justify-center border border-border text-xs text-foreground hover:border-primary transition-colors cursor-pointer">
            MR
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
