import { projectData } from "../dados/projectData";
import { ProjectItem } from "./projetosItem";

export const Projetos = () => {
  const projeto = projectData;
  return (
    <div className="flex flex-col items-center mx-2">
      <h2 className="text-4xl font-bold mb-8 text-center max-sm:text-2xl ">
        Projetos em Destaque
      </h2>

      <div className="flex flex-wrap gap-10 items-center justify-center">
        {projeto.map((item, index) => (
          <ProjectItem
            img={item.img}
            linguagem={item.linguagem}
            link={item.link}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
