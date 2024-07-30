import { useContext } from "react";
import { ContextMenu } from "../context/Context";
import { MenuItems } from "../helps/menuItem";
import { Link } from "react-router-dom";

export const Header = () => {
  const { selected, setSelected, toogle, isMenuSelected } =
    useContext(ContextMenu);
  const menuItems = MenuItems;

  const handleClick = (index: number) => {
    setSelected(index);
  };
  return (
    <div className="flex items-center justify-between p-4 bg-neutral-800">
      <h1 className="text-yellow-500 font-bold text-xl font-edu">
        Jair
        <span className="text-white font-bold text-xl font-poppins font-medium">
          Jr
        </span>
      </h1>
      <nav className="max-sm:hidden">
        <ul className="flex text-white font-bold font-poppins font-normal cursor-pointer ">
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              onClick={() => handleClick(index)}
              className={`mx-1 px-1 rounded hover:text-yellow-500 ${
                selected === index ? "border-b-2 border-yellow-500 " : ""
              } `}
            >
              {item.nome}
            </Link>
          ))}
        </ul>
      </nav>
      {!isMenuSelected ? (
        <div className="toogle cursor-pointer sm:hidden" onClick={toogle}>
          <div className="w-[30px] h-[5px] bg-yellow-500 mb-1 rounded"></div>
          <div className="w-[30px] h-[5px] bg-yellow-500 mb-1 rounded"></div>
        </div>
      ) : (
        <div
          onClick={toogle}
          className="text-yellow-500 font-bold font-poppins text-xl"
        >
          X
        </div>
      )}
    </div>
  );
};
