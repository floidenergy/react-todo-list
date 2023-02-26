import React, {useState, createContext, useContext} from "react"

const Context = createContext();

export const GlobalContext = () => {
    return useContext(Context);
}

export const AppProvider = ({children}) => {
    const [Tasks, setTasks] = useState([{
        "Name": "booommm bastic",
        "Description": "chakabom\n\n",
        "Time": "2023-02-26T02:01:55.127Z",
        "Color": "#198f9f",
        "Done": false
    }]);


    return <Context.Provider value={{Tasks, setTasks}}>
        {children}
    </Context.Provider>
}