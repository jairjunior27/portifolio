import projeto1 from "../assets/imagem-projeto-01.jpg";
import react from "../assets/React_(web_framework)-Logo.wine (1).svg";
import typescript from "../assets/typescript.png";
import redux from "../assets/redux.png";
import axios from "../assets/axios.png";

export type ProjetoType = {
  title: string;
  img: string;
  link: string;
  linguagem: string[];
};

export const projectData: ProjetoType[] = [
  {
    title: "Site-Rádio",
    img: projeto1,
    link: "https://sistemaalternativo.vercel.app/",
    linguagem: [react, typescript, redux, axios],
  },
  {
    title: "Projeto2",
    img: projeto1,
    link: "https://sistemaalternativo.vercel.app/",
    linguagem: [react],
  },
];
