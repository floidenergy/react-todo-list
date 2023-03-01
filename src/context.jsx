import React, {useState, createContext, useContext, useEffect} from "react"

const Context = createContext();

export const GlobalContext = () => {
    return useContext(Context);
}

export const AppProvider = ({children}) => {
    const [Tasks, setTasks] = useState([]);

    useEffect(() => {
        // console.log();
        const taskFetched = JSON.parse(localStorage.getItem('tasks'));
        if(taskFetched == null)
            setTasks([]);
        else
            setTasks(taskFetched);
    }, []);

    useEffect(() => {
        if(Tasks.length !== 0)
            localStorage.setItem('tasks', JSON.stringify(Tasks));
    }, [Tasks])

    const removeTask = (id) => {
        const newTasks = Tasks.filter(T => T.id != id);
        setTasks(newTasks);
    }

    return <Context.Provider value={{Tasks, setTasks, removeTask}}>
        {children}
    </Context.Provider>
}