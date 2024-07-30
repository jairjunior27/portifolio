import imagemJr from "../assets/jrPortifolio.png";


export const HeroPage = () =>{
    return(
        <div className="flex items-center bg-gray-200">
        <div className="flex-1 flex flex-col items-center p-2 ">
          <h2 className=" font-edu font-bold text-4xl  max-[985px]:text-2xl  max-[620px]:text-[19px] max-[510px]:flex flex-col items-center ">
            Olá me chamo{" "}
            <span className="text-yellow-500 mx-1 "> Jair Júnior </span>
          </h2>
          <p className="font-edu font-light mt-2 max-[985px]:text-[14px] text-center max-[620px]:text-[11px] ">
            Bacharel em Ciencias da Computação e Desenvolvedor Fullstack
          </p>
        </div>
        <div className="flex-1 clip-custom-polygon bg-orange-300 flex justify-end">
          <img src={imagemJr} alt="imagem-jr" title="imagem-jr" />
        </div>
      </div>
    )
}