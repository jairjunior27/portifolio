import imgFundo from "../assets/jrPortifolio.jpg";
import jrPortifolio from "../assets/jrImage.png";

export const HeroPage = () => {
  return (
    <div
      className=" flex relative min-h-[600px] max-[820px]:flex-col "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(${imgFundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-1 items-center flex bottom-0 max-[820px]:order-2  max-[820px]:flex justify-center">
        <img src={jrPortifolio} alt="Jair Junior" className="h-full" />
      </div>

      <div className="flex-1 text-white justify-center flex flex-col items-center p-4 text-center max-[820px]:order-1 max-[820px]:mt-10 ">
        <h2 className="text-6xl  max-[1100px]:text-4xl max-[400px]:text-2xl">
          Olá, sou <span className="font-edu text-yellow-400">Jair Júnior</span>
        </h2>
        <p className="text-xl max-[1100px]:text-md max-[400px]:text-sm mt-2">
          Bacharel em Ciências da Computação e Desenvolvedor Full Stack
        </p>
        <button className="border-2 rounded px-8 py-2 mt-8 hover:bg-white text-neutral-500">
          Saiba Mais
        </button>
      </div>
    </div>
  );
};
