import { SkillItem } from "./skilItem";
import javascrip from "../assets/javascript-1.svg";
import node from "../assets/node-js-2.png";
import htmlCss from "../assets/CSS3_and_HTML5_logos_and_wordmarks.svg";
import git from "../assets/Git_icon.svg.png";
import react from "../assets/React_(web_framework)-Logo.wine (1).svg";
import reactNative from "../assets/react-native-logo.png";
import postgress from "../assets/postgresql-plain-wordmark-icon-2048x2042-up54u54l.png";
import github from "../assets/github.png";
import typescript from "../assets/typescript.png";
import redux from "../assets/redux.png";
import express from "../assets/Expressjs.png";
import python from "../assets/python.jpg";
import jwt from '../assets/jwt.png'
import tailwind from '../assets/tailwind.png'
import arduino from '../assets/arduino.png'

export const Skills = () => {
  return (
    <div className="m-8">
      <h2 className="text-3xl font-bold text-center mb-6">Tecnologias</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <SkillItem img={htmlCss} />
        <SkillItem img={tailwind} />
        <SkillItem img={javascrip} />
        <SkillItem img={typescript} />
        <SkillItem img={react} />
        <SkillItem img={redux} />
        <SkillItem img={reactNative} />
        <SkillItem img={node} />
        <SkillItem img={express} />
        <SkillItem img={jwt} />
        <SkillItem img={python} />
        <SkillItem img={git} />
        <SkillItem img={github} />
        <SkillItem img={postgress} />
        <SkillItem img={arduino} />
      </div>
    </div>
  );
};
