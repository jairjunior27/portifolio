import { createContext } from "react";

type contextType ={
    selected: number
    isMenuSelected: boolean
    setSelected: (value: number) => void
    toogle: () => void
}

const initialContext: contextType ={
    selected: 0,
    isMenuSelected: false,
    setSelected: () =>{},
    toogle: ()=>{}
}
export const ContextMenu = createContext<contextType>(initialContext);