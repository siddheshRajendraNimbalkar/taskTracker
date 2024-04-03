import React, { useState } from 'react';
import { AddTask } from './components/AddTask';
import ToDo from './components/ToDo';
import { useDrop } from 'react-dnd';

const App = () => {
    const [taskList, setTaskList] = useState([]);
    const [completed, setCompleted] = useState([]);

    const [, drop] = useDrop(() => ({
        accept: 'todo',
        drop: (item) => addToCompleted(item.id, item.projectName, item.taskDesc),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addToCompleted = (id, projectName, taskDesc) => {
        const updatedTaskList = taskList.filter(task => task.id !== id);
        const completedTask = { id, projectName, taskDesc };
        setTaskList(updatedTaskList);
        setCompleted(prevCompleted => [...prevCompleted, completedTask]);
    };

    return (
        <>
            <h1 className='text-2xl font-bold py-2 pl-6'>Task Tracker</h1>
            <div className='flex flex-row items-center'>
                <p className='text-xl pl-6'>Click</p>
                <AddTask taskList={taskList} setTaskList={setTaskList} />
                <p className='text-xl my-2'>To add a new task</p>
            </div>
            <div className='flex flex-row w-full'>
                <div className='w-full'>
                    <h2 className='ml-6 text-xl w-3/4 max-w-lg font-semibold my-4 py-2 px-4 bg-gray-300'>To Do:</h2>
                    {taskList.map((task, i) => (
                        <ToDo key={i} task={task} index={i} taskList={taskList} setTaskList={setTaskList} />
                    ))}
                </div>
                <div className='w-full' ref={drop}>
                    <h2 className='ml-6 text-xl w-3/4 max-w-lg font-semibold my-4 py-2 px-4 bg-gray-300'>Completed:</h2>
                    {completed.map((task, i) => (
                        <ToDo key={i} task={task} index={i} taskList={completed} setTaskList={setCompleted} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default App;
