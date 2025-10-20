import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

// Defina um novo tipo para o nome da seção ativa, incluindo um valor inicial.
type ActiveSection = typeof navItems[number]["name"] | null;

const navItems = [
  {
    name: "Inicio", href: "#hero"
  },
  {
    name: "Sobre", href: "#about"
  },
  {
    name: "Habilidades", href: "#skills"
  },
  {
    name: "Projetos", href: "#projects"
  },
  {
    name: "Contato", href: "#contact"
  },
]

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 1. Novo estado para a seção ativa.
  const [activeSection, setActiveSection] = useState<ActiveSection>("Inicio");

  useEffect(() => {
    const handleScroll = () => {
      // Lógica de transparência e sombra
      setIsScrolled(window.scrollY > 10);

      // 2. Lógica para determinar a seção ativa
      let currentSection: ActiveSection = null;

      // Itera sobre todos os itens para encontrar qual seção está visível.
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const sectionId = item.href.substring(1); // Remove o '#'
        const section = document.getElementById(sectionId);

        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 300 || (i === navItems.length - 1 && rect.bottom <= window.innerHeight)) {
             currentSection = item.name;
             break;
          }
        }
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      } else {
        setActiveSection("Inicio");
      }
    };
    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, []) //

  return (
    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdroup-blur-md shadow-sxd" : "py-5"
    )}>
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-10">
            <span className="text-glow text-foreground">{"<"} Victor Kossmann</span> Portifolio {"/>"}
          </span>
        </a>
        
        {/* navbar normal */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            // 3. Aplicação de classes condicionais para o sublinhado
            <a 
              key={key} 
              href={item.href} 
              className={cn(
                "relative text-foreground/80 hover:text-primary transition-colors duration-300 group", // Adicione 'group' para o hover
                activeSection === item.name 
                  ? "text-primary font-medium" // Classe para a seção ativa (cor mais forte)
                  : ""
              )}
            >
              {item.name}
              {/* Elemento de sublinhado */}
              <span className={cn(
                "absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300",
                "group-hover:w-full", // Sublinhado completo no hover
                activeSection === item.name 
                  ? "w-full" // Sublinhado completo se for a seção ativa
                  : "w-0"   // Sem sublinhado
              )}></span>
            </a>
          ))}
        </div>
        
        {/* navbar mobile */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {
            isMenuOpen
              ? <X size={24} />
              : <Menu size={24} />
          }
        </button>
          <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-colors duration-300",
                  activeSection === item.name 
                    ? "text-primary font-bold" 
                    : ""
                )}
                onClick={() => {
                  setActiveSection(item.name);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}