import React from 'react'

import { GlobalContext } from './context';

import AddTask from './component/AddTask';
import DateComp from './component/DateComp';
import TodoModal from './component/TodoModal';

import './style.css'

const App = () => {

    return (
        <>
            <DateComp />
            <AddTask />
            {/* <TodoModal /> */}
        </>
    )

}

export default App;