import React from 'react';

const AddTask = () => {
    return (
        <header className='searchBar'>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" name="AddTask" id="TaskInput" placeholder='Add A Task' />
                <input type="submit" value="Add Task" />
            </form>
        </header>
    );
}

export default AddTask;