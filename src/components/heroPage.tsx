import imgFundo from "../assets/jrPortifolio.jpg";
import jrPortifolio from "../assets/jrImage.png";
import useScrollAnimation from "../hooks/scrollAnimate";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export const HeroPage = () => {
  useScrollAnimation();
  return (
    <div
      className="flex relative min-h-[640px] max-[820px]:flex-col max-[820px]:min-h-[500px] "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(${imgFundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-1 items-center flex bottom-0 max-[820px]:order-2 max-[820px]:flex justify-center max-[820px]:h-[300px]">
        <img
          src={jrPortifolio}
          alt="Jair Junior"
          title="img-Jair Junior"
          className="h-full max-[820px]:h-[350px] "
        />
      </div>

      <div className="flex-1 text-white justify-center flex flex-col items-center p-4 text-center max-[820px]:order-1 max-[820px]:mt-10 scroll-animation">
        <h2 className="text-6xl max-[1100px]:text-4xl max-[400px]:text-3xl">
          Olá, sou{" "}
          <span className="font-edu text-yellow-400">
            Jair <span className="text-gray-400">Júnior</span>
          </span>
        </h2>
        <p className="text-xl max-[1100px]:text-md max-[400px]:text-sm mt-2">
          Bacharel em Ciências da Computação e Desenvolvedor Full Stack
        </p>
        <a
          href="/logo.pdf"
          download
          className="bg-yellow-700 text-neutral-100 rounded w-[200px] py-2 mt-8 bg-gradient-to-r from-yellow-700 to-orange-500 bg-[length:200%_100%] hover:bg-[length:200%_100%] hover:animate-hoverColorChange hover:text-gray-400"
        >
          Download CV
        </a>
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
    </div>
  );
};
