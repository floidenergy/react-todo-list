import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context'

const AddTask = () => {
    const [isAddTask, setIsAddTask] = useState(false)
    // const [task, setTask] = useState()

    const [TaskName, setTaskName] = useState()
    const [taskDescription, setTaskDescription] = useState()
    const [taskColor, setTaskColor] = useState('#ff0000')
    // const

    const { setTasks, Tasks } = GlobalContext()

    return (
        <div className='addTaskSection'>
            {isAddTask && (
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        const timeNow = new Date()

                        // timeNow.getDay();

                        setTasks([
                            ...Tasks,
                            { Name: TaskName, Description: taskDescription, Time: timeNow, Color: taskColor, Done: false }
                        ])
                        setTaskName('')
                        setTaskDescription('')
                        setTaskColor('#ff0000')
                    }}
                >
                    <input
                        type='text'
                        name='AddTask'
                        id='TaskInput'
                        required
                        placeholder='Add A Task'
                        value={TaskName}
                        onChange={e => {
                            setTaskName(e.target.value)
                        }}
                    />
                    <textarea
                        id='description'
                        name='taskDescription'
                        placeholder="Your Task's Description"
                        rows='6'
                        cols='25'
                        value={taskDescription}
                        onChange={e => {
                            setTaskDescription(e.target.value)
                        }}
                    />
                    <input
                        type='color'
                        name='TaskColor'
                        id='taskColor'
                        value={taskColor}
                        onChange={e => setTaskColor(e.target.value)}
                    />
                    <input
                        type='submit'
                        value='Add Task'
                    />
                </form>
            )}

            <button className='addTaskButton' onClick={() => setIsAddTask(!isAddTask)}>+</button>
        </div>
    )
}

export default AddTask
