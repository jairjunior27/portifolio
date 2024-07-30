import { ReactNode, useState } from "react";
import { ContextMenu } from "../context/Context";

export const ProviderMenu = ({ children }: { children: ReactNode }) => {
  const [selected, setSelectedState] = useState(0);
  const [isMenuSelected, setIsmenuSelected] = useState(false);

  const setSelected = (value: number) => {
    setSelectedState(value);
  };

  const toogle = () => {
    setIsmenuSelected((prev) => !prev);
  };
  return (
    <ContextMenu.Provider
      value={{ isMenuSelected, selected, setSelected, toogle }}
    >
      {children}
    </ContextMenu.Provider>
  );
};
