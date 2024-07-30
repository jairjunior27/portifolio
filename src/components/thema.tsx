import { ReactNode, useContext } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { ContextMenu } from "../context/Context";
import { MenuItems } from "../helps/menuItem";
import { Link } from "react-router-dom";

export const Thema = ({ children }: { children: ReactNode }) => {
  const { isMenuSelected, selected,setSelected } = useContext(ContextMenu);
  const menuItems = MenuItems;



  const handleClick =(index: number) =>{
      setSelected(index)
  }
  return (
    <div className="">
      <Header />
      {isMenuSelected && (
        <nav className="bg-sky-900 border-y text-white absolute left-0 right-0 z-10">
          <ul className="flex flex-col items-center">
            {menuItems.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`rounded my-3 font-edu ${
                  selected === index ? "border-b-2  " : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {item.nome}
              </Link>
            ))}
          </ul>
        </nav>
      )}

      <div className="h-full"> {children}</div>
      <Footer />
    </div>
  );
};
