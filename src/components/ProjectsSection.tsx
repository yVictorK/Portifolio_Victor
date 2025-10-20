import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Projeto Pomodoro",
    description: "Um contador pomodoro, com histório dos ciclos realizados. Utilizando conceitos de componentização, rotas e validação de formulários",
    image: "/projects/pomodoro.png",
    tags: ["React", "Styled-components", "TypeScript", "Hook-Form", "Git"],
    githubUrl: "https://github.com/yVictorK/ProjetoPomodoro",
  },
  {
    id: 2,
    title: "Akademia App Mobile",
    description: "Um app mobile voltado a auxiliar vestibulandos amazonenses a estudarem e organizarem sua rotina e prepararem seus estudos para os vestibulares",
    image: "/projects/akademia.png",
    tags: ["React Native", "MongoDB", "TypeScript", "Git"],
    githubUrl: "https://github.com/yVictorK/akademia",
  },
  {
    id: 3,
    title: "Pizza Shop",
    description: "Uma aplicação Web para controle de pedidos, receita e desempenho de uma pizzaria. Foram utilizados conceitos componentização, hooks do React, consumo de API'S e TailwindCSS",
    image: "/projects/PizzaShop.png",
    tags: ["React", "TailwindCSS", "TypeScript", "Bun", "Shadcn", "Git"],
    githubUrl: "https://github.com/yVictorK/pizzashop-web",
  }
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Projetos <span className="text-primary">Recentes</span></h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui estão alguns dos meus projetos recentes e de maior relevância.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full">{tag}</span>
                  ))}
                </div>


                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/yVictorK"
            target="_blank"
          >
            Mais Projetos no GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}