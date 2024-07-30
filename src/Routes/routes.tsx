import { useRoutes } from "react-router-dom";
import { Home } from "../pages/home";
import { Sobre } from "../pages/sobre";
import { ProjetosPage } from "../pages/projetos";
import { Contatos } from "../pages/contatos";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sobre", element: <Sobre /> },
    { path: "/projetos", element: <ProjetosPage /> },
    { path: "/contatos", element: <Contatos /> },
  ]);
};
