import { Abount } from "../components/Abount";
import { HeroPage } from "../components/heroPage";
import { Projetos } from "../components/projetos";
import { Skills } from "../components/skills";
import { Thema } from "../components/thema";
export const Home = () => {
  return (
    <Thema>
     <HeroPage/>
     <Skills/>
     <Projetos/>
     <Abount/>
      <div className="my-4 ">...</div>
    </Thema>
  );
};
