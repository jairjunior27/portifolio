import { SkilsData } from "../dados/skilIsData";
import { SkillItem } from "./skilItem";

export const Skills = () => {
  const skills = SkilsData;
  return (
    <div className=" p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Tecnologias</h2>
      <div className="flex">
        {skills.map((item, index) => (
          <SkillItem img={item.skils} key={index} />
        ))}
      </div>
    </div>
  );
};
