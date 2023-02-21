import React from 'react'

import { GlobalContext } from './context';

import AddTask from './component/AddTask';
import Date from './component/Date';
import TodoModal from './component/TodoModal';

import './style.css'

const App = () => {

    return (
        <>
            <AddTask />
            <Date />
            {/* <TodoModal /> */}
        </>
    )

}

export default App;