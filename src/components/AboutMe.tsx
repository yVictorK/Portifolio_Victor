import victorProfilePic from "../assets/Victor_profile.png"
import cv from "../assets/Victor_CV.pdf";
import { ScrollSideIn } from "./ScrollSideIn"

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <ScrollSideIn side="left">
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-bold">Estudante e Desenvolvedor</h3>

                <p className="text-foreground">
                  Me chamo Victor, tenho 19 anos, sou <span className="font-semibold">Técnico em Informática pela Fundação Matias Machline</span>
                  {" "}e atualmente sou estudante de <span className="font-semibold">Engenharia de Software na Universidade Federal do Amazonas (UFAM)</span>.
                  Sou apaixonado por tecnologia desde a infância e sempre busco aprender algo novo na área.
                </p>

                <p className="text-foreground">
                  Tenho grande interesse em Desenvolvimento Front-End, criando sites e aplicativos (Web e Mobile)
                  acessíveis, responsivos e otimizados. Trabalho utilizando frameworks modernos para entregar softwares
                  funcionais e sempre atualizados.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center text-center">
                  <a href="#contact" className="cosmic-button"> Fale Comigo!</a>
                  <a
                    href={cv}
                    download="Victor_Kossmann_CV.pdf"
                    className="flex items-center justify-center px-6 py-1 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors-duration-300"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </ScrollSideIn>
          </div>

          <div className="order-1 md:order-2">
            <ScrollSideIn side="right">
              <div className="relative flex justify-center md:justify-end">
                <div className="absolute inset-0 flex justify-center md:justify-end">
                  <div className="w-72 md:w-96 h-72 md:h-96 bg-gradient-to-tr from-primary/60 to-transparent blur-3xl rounded-full"></div>
                </div>

                <img
                  src={victorProfilePic}
                  alt="Foto de Victor Kossmann"
                  className="relative w-64 md:w-80 lg:w-96 rounded-full object-cover shadow-2xl border-2 border-primary/30"
                />
              </div>
            </ScrollSideIn>
          </div>
        </div>
      </div>
    </section>
  );
}