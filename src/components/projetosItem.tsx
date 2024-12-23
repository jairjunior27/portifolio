import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

type prop = {
  title: string;
  img: string;
  link: string;
  linguagem: string[];
};
export const ProjectItem = ({ title, img, link, linguagem }: prop) => {
  return (
    <Link to={link}>
    <div className=" w-[300px] h-[600px] flex flex-col  items-center border-2 rounded">
      <h2 className="text-2xl font-edu text-center mb-3 bg-blue-700 w-full p-2 text-white font-bold rounded">
        {title}
      </h2>
      <div className="h-[300px] w-full border-">
        <img
          src={img}
          alt={`imagem-${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-3">
        {linguagem.map((img, index) => (
          <div className="w-[70px] h-[80px] mx-2" key={index}>
            <img
              src={img}
              alt="img-linguagem"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      <Link to={link} target="_blank" className="text-2xl my-3">
        <FaLink />
      </Link>
    </div>
    </Link>
  );
};
