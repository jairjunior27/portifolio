import { ReactNode, useContext } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { ContextMenu } from "../context/Context";
import { MenuItems } from "../dados/menuData";
import { Link } from "react-router-dom";

export const Thema = ({ children }: { children: ReactNode }) => {
  const { isMenuSelected, selected, setSelected } = useContext(ContextMenu);
  const menuItems = MenuItems;

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      {isMenuSelected && (
        <nav className="bg-neutral-800 border-y text-white absolute top-16 left-0 right-0 z-10 p-8">
          <ul className="flex flex-col items-center">
            {menuItems.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`rounded my-3 font-edu hover:border-2 border-yellow-500 ${
                  selected === index ? "border-b-2 border-yellow-500" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {item.nome}
              </Link>
            ))}
          </ul>
        </nav>
      )}

      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};
