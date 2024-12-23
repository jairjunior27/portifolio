import projeto1 from "../assets/imagem-projeto-01.jpg";
import lojaJota from "../assets/loja-jota.png";
import react from "../assets/React_(web_framework)-Logo.wine (1).svg";
import typescript from "../assets/typescript.png";
import redux from "../assets/redux.png";
import axios from "../assets/axios.png";
import next from "../assets/next-js.png";
import tailwind from "../assets/tailwind.jpg";
import node from '../assets/node-js-2.png'
import express from '../assets/Expressjs.png'
import jwt from '../assets/jwt.png'
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
    title: "Loja-Jota em Construção...",
    img: lojaJota,
    link: "https://lojajota.vercel.app/",
    linguagem: [next, tailwind,typescript,axios,node,express,jwt],
  },
];
