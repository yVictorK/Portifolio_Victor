import { FileHtml, FileJs, FileTs, Database, GithubLogo, FigmaLogo, Coffee } from "phosphor-react"
import Docker from "../assets/Docker.svg";
import Nextjs from "../assets/Nextjs.svg";
import NodeJs from "../assets/NodeJs.svg"
import TailWind from "../assets/Tailwind.svg"
import Golang from "../assets/Golang.svg"
import React from "../assets/React.svg"
import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [
  { name: "HTML/CSS", icon: FileHtml, category: "frontend" },
  { name: "JavaScript", icon: FileJs, category: "frontend" },
  { name: "React", icon: React, category: "frontend" },
  { name: "TypeScript", icon: FileTs, category: "frontend" },
  { name: "Tailwind CSS", icon: TailWind, category: "frontend" },
  { name: "Next.js", icon: Nextjs, category: "frontend" },
  { name: "React Native", icon: React, category: "frontend" },

  { name: "Node.js", icon: NodeJs, category: "backend" },
  { name: "Java", icon: Coffee, category: "backend" },
  { name: "MongoDB", icon: Database, category: "backend" },
  { name: "MySQL", icon: Database, category: "backend" },
  { name: "Go", icon: Golang, category: "backend" },

  { name: "Git/Github", icon: GithubLogo, category: "ferramentas" },
  { name: "Docker", icon: Docker, category: "ferramentas" },
  { name: "Figma", icon: FigmaLogo, category: "ferramentas" },
]

const categories = ["todos", "frontend", "backend", "ferramentas"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const filteredSkills = skills.filter((skill) => activeCategory == "todos"
    || skill.category == activeCategory)

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary"> Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory == category ? "bg-primary text-primary-foreground" : "text-foreground"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4">
                <div>
                  {typeof Icon === "string" ? (
                    <img src={Icon} alt={skill.name} className="w-6 h-6" />
                  ) : (
                    <Icon width={24} height={24} className="text-primary" />
                  )}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg"> {skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}