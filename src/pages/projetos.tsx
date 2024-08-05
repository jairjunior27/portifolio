import { Thema } from "../components/thema";
import { projectData } from "../dados/projectData";
import { ProjectItem } from "../components/projetosItem";

export const ProjetosPage = () => {
  const projeto = projectData;

  return (
    <Thema>
  
    <div className="flex flex-col items-center p-8 ">
      <h2 className="text-4xl font-bold mb-5 text-center max-sm:text-2xl ">
        Projetos em Destaque
      </h2>

      <div className="flex flex-wrap gap-10 items-center justify-center my-5 ">
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
  
    </Thema>
  );
};
