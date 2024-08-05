import imgSobre from "../assets/imgJrSobre.jpeg";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export const Abount = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-[250px] h-[250px] overflow-hidden rounded-full bg-cover mb-5 ">
          <img
            src={imgSobre}
            alt="Jair Junior"
            className="w-full h-full object-top object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Formado em Ciências da Computação sou um desenvolvedor de software
          apaixonado por criar soluções inovadoras e eficientes. Tenho
          experiência em várias tecnologias e adoro aprender coisas novas.
        </p>
        <div className="flex mt-10 gap-5 cursor-pointer">
          <a href="https://github.com/jairjunior27" target="_blank">
            <IoLogoGithub className="text-2xl hover:text-gray-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/jair-junior-886078216/"
            target="_blanc"
          >
            <IoLogoLinkedin className="text-2xl hover:text-gray-200" />
          </a>
          <a href="mailto:jaircezar83@gmail.com">
            <MdEmail className="text-2xl hover:text-gray-200" />
          </a>
        </div>
      </div>
    </section>
  );
};
