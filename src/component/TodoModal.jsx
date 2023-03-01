import React, { useState } from 'react'

import { GlobalContext } from '../context'

//  TODO:   STYLE DELETE TASK BUTTON

const TodoModal = () => {
    const { Tasks, removeTask } = GlobalContext()
    const [data, setData] = useState(true)

    return (
        <div className='Todo-Modal'>
            {Tasks.length !== 0 ? Tasks.map((task, index) => {

                const day = [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday'
                ].at(new Date(task.Time).getDay())
                const date = new Date(task.Time).getDate()
                const month = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ].at(new Date(task.Time).getMonth())
                const year = new Date(task.Time).getFullYear()

                return (
                    <div className="taskBorder">
                        <button className="deleteTaskButton" onClick={() => removeTask(task.id)}>delete</button>

                        <div
                            key={task.id}
                            className='TaskCard'
                            style={{ borderLeft: `6px solid ${task.Color}` }}
                        >
                            <div className='info'>
                                <p className='taskName'>{task.Name}</p>
                                <p className='taskDescription'>
                                    {task.Description}
                                </p>
                            </div>
                            <div className='info2'>
                                <button
                                    className='doneButton'
                                    style={
                                        task.Done
                                            ? {
                                                color: 'white',
                                                backgroundColor: '#72d9ff'
                                            }
                                            : {
                                                color: 'black',
                                                backgroundColor: '#e7e7e7'
                                                }
                                            }
                                            onClick={() => {
                                                task.Done = !task.Done;
                                                setData(!data) // to trigger re-render
                                            }}
                                            >
                                    &#x2713;
                                </button>
                                
                                <p className='taskDate'>{`${day} ${date} / ${month} / ${year}`}</p>
                            </div>
                        </div>
                    </div>
                )
            }) :
            //  TODO: style text if no tasks is there
            <p>No Taskes Added</p>
        }
        </div>
    )
}

export default TodoModal
