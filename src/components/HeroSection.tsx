import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation"
import LinkedinLogo from "../assets/icons/Linkedin";
import GitHubLogo from "../assets/icons/GitHub";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-2">
          <div className="flex mb-4 gap-4  opacity-0 animate-fade-in-delay-1">
            <a
              className="rounded-2xl border-muted-foreground hover:border-primary/40 hover:text-primary/40 hover:border-2 duration-300"
              href="https://linkedin.com/in/victorkossmann"
              target="_blank"
            >
              <LinkedinLogo className="h-6 w-6 md:h-9 md:w-9 text-foreground fill-current" />
            </a>
            <a
              href="https://github.com/yVictorK"
              target="_blank"
              className="rounded-2xl border-muted-foreground hover:border-primary/40 hover:text-primary/40 hover:border-2 duration-300"
            >
              <GitHubLogo className="h-6 w-6 md:h-9 md:w-9 text-foreground fill-current" />
            </a>
          </div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight flex flex-col text-left opacity-0 animate-fade-in-delay-2">
            <span className="opacity-0 animate-fade-in">
              Olá, me chamo <span className="text-primary text-glow"> Victor Kossmann</span>, e sou
            </span>

          </h1>
          <div className="pt-4 text-left opacity-0 animate-fade-in-delay-4">
            <TypeAnimation
              sequence={[
                'Desenvolvedor de Software',
                2000,
                'Desenvolvedor Frontend',
                2000,
                'Estudante de Engenharia de Software',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              className="text-4xl md:text-6xl font-bold tracking-tight flex flex-col"
              repeat={Infinity}
            />
          </div>

        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>


    </section>
  );
}