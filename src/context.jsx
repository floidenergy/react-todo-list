import React, {createContext, useContext} from "react"

const Context = createContext();

export const GlobalContext = () => {
    return useContext(Context);
}

export const AppProvider = ({children}) => {
    return <Context.Provider value={{name:"hello"}}>
        {children}
    </Context.Provider>
}