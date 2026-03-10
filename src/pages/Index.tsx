import Navbar from "@/components/Navbar";
import StoryCard from "@/components/StoryCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stories = [
  {
    title: "La casa donde terminan los caminos",
    author: "Elena Vásquez",
    monogram: "EV",
    excerpt: "Nadie recordaba cuándo había aparecido la casa al final de la calle empedrada. Estaba ahí, como siempre habían estado los cerros y el río, como si la tierra misma la hubiera empujado hacia arriba.",
    readTime: "12 min de lectura",
  },
  {
    title: "Ceniza y sal",
    author: "Rodrigo Amézquita",
    monogram: "RA",
    excerpt: "El mar devolvió el cuerpo tres días después, cubierto de algas y con los bolsillos llenos de piedras blancas.",
    readTime: "8 min de lectura",
  },
  {
    title: "El relojero de Berlín",
    author: "Marta Estrada",
    monogram: "ME",
    excerpt: "Herr Kaufmann no reparaba relojes. Los escuchaba. Ponía cada mecanismo contra su oído izquierdo —el derecho lo había perdido en Stalingrado— y diagnosticaba sus males como un médico ausculta un pecho enfermo.",
    readTime: "22 min de lectura",
  },
  {
    title: "Territorio de lobos",
    author: "Santiago Herrera",
    monogram: "SH",
    readTime: "15 min de lectura",
  },
  {
    title: "Las manos del pianista",
    author: "Clara Domínguez",
    monogram: "CD",
    excerpt: "Tocaba con los ojos cerrados, no por virtuosismo sino por vergüenza. Sus manos, enormes y callosas de albañil, parecían un insulto sobre las teclas de marfil.",
    readTime: "10 min de lectura",
  },
  {
    title: "Instrucciones para desaparecer",
    author: "Julián Restrepo",
    monogram: "JR",
    readTime: "6 min de lectura",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container max-w-4xl">
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-semibold text-foreground leading-[0.95] mb-8 animate-fade-in">
            Un santuario<br />
            para la palabra<br />
            <span className="text-primary">escrita</span>
          </h1>
          <p className="font-body text-lg text-secondary max-w-lg leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Lee y escribe ficción sin distracciones. Cada historia merece tu atención completa.
          </p>
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="default" size="lg" className="font-heading text-base tracking-wide">
              Comenzar a leer
              <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg" className="font-heading text-base tracking-wide">
              Escribir una historia
            </Button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="border-t border-border" />
      </div>

      {/* Featured Stories - Asymmetric Grid */}
      <section className="py-20 px-6" id="explorar">
        <div className="container max-w-6xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-2">
            Historias recientes
          </h2>
          <p className="text-muted-foreground mb-12">Descubre lo que otros han escrito.</p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large card */}
            <div className="md:col-span-7">
              <StoryCard {...stories[0]} variant="large" className="h-full" />
            </div>
            <div className="md:col-span-5 flex flex-col gap-6">
              <StoryCard {...stories[1]} variant="medium" />
              <StoryCard {...stories[3]} variant="small" />
            </div>

            <div className="md:col-span-5">
              <StoryCard {...stories[2]} variant="medium" className="h-full" />
            </div>
            <div className="md:col-span-4">
              <StoryCard {...stories[4]} variant="medium" className="h-full" />
            </div>
            <div className="md:col-span-3">
              <StoryCard {...stories[5]} variant="small" className="h-full" />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="font-heading text-base tracking-wide">
              Cargar más historias
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="container max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-heading text-xl text-foreground">El Umbral</span>
          <p className="text-sm text-muted-foreground">Un espacio para la ficción. Sin distracciones. Sin ruido.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
