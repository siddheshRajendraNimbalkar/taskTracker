// import React, { useState } from 'react'

// export const AddTask = ({taskList,setTaskList}) => {
//     const [addmodal, setAddModal] = useState(false);
//     const [projectName,setProjectName] = useState("");
//     const [taskDesc,setTaskDesc]=useState("")

//     const  handleInput = (e)=>{
//         const {name,value} = e.target;

//         if(name == "projectName") setProjectName(value)
//         if(name == "taskDesc") setTaskDesc(value)
//     }

//     const handleAdd = (e) => {
//         e.preventDefault();
//          setTaskList(
//             [...taskList,{projectName,taskDesc}]
//         );
//         setAddModal(false);
//         setProjectName("");
//         setTaskDesc("");
//         console.log(taskList)
//     }

//     return (
//         <>
//             <button
//                 className='bg-blue-500 text-white uppercase text-sm 
//         font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70'
//                 type='button'
//                 onClick={() => { setAddModal(true) }}
//             >New+
//             </button>
//             {addmodal ? (
//                 <>
//                     <div className='flex items-center justify-center
//                 overflow-x-hidden
//                 overflow-y-auto fixed inset-0 z-100'>
//                         <div className='bg-white w-9/12 border rounded-lg
//                         shadow-md relative flex-col'>

//                             <div className=' flex flex-row justify-between p-5'>
//                                 <h3
//                                     className='text-3xl font-semibold'
//                                 >Add New Task</h3>
//                                 <button className='px-1 text-gray-400
//                     float-right text-3xl leading-none font-semibold block'
//                                     onClick={() => setAddModal(false)}
//                                 >
//                                     X</button>
//                             </div>
//                             <div>
//                                 <form action="" className='p-6'>


//                                     <label htmlFor="project-name" className=' block uppercase  text-gray-700 text-xs font-semibold mb-2'>Project Name</label>
//                                     <input
//                                     name='projectName'
//                                     value={projectName}
//                                         className='w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
//                                     py-3 px-4 mb-5 leading-tight
//                                     focus:outline-none focus:bg-white'
//                                         id='project-name'
//                                         type='text'
//                                         placeholder='Project Name'
//                                         onChange={handleInput}
//                                     />
//                                 </form>
//                             </div>
//                             <div className='px-6'>
//                                 <label htmlFor="taskDescription"
//                                 className=' block uppercase  text-gray-700 text-xs font-semibold mb-2'>
//                                     Task Description
//                                 </label>
//                                 <textarea 
//                                 className='w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
//                                 py-3 px-4 mb-5 leading-tight
//                                 focus:outline-none focus:bg-white'
//                                 id="task-description" cols="3"
//                                 placeholder='Task Description'
//                                 name='taskDesc'
//                                 value={taskDesc}
//                                 onChange={handleInput}></textarea>
//                             </div>
//                             <div className='flex justify-end p-6  border-slate-200 
//                             rounded-b'>
//                                 <button
//                                 className='bg-blue-500
//                                 text-white font-semibold uppercase
//                                 text-sm px-6
//                                 py-3 rounded hover:opacity-70'
//                                 onClick={handleAdd}
//                                 >Add Task</button>
//                             </div>

//                         </div>
//                     </div>
//                 </>
//             ) : null}
//         </>
//     )
// }






import React, { useState } from 'react';

export const AddTask = ({ taskList, setTaskList }) => {
    const [addModal, setAddModal] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const handleInput = (e) => {
        const { name, value } = e.target;

        if (name === 'projectName') setProjectName(value);
        if (name === 'taskDesc') setTaskDesc(value);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setTaskList([...taskList, { projectName, taskDesc }]);
        setAddModal(false);
        setProjectName('');
        setTaskDesc('');
    };

    return (
        <>
            <button
                className='bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70'
                type='button'
                onClick={() => {
                    setAddModal(true);
                }}
            >
                New+
            </button>
            {addModal && (
                <div className='fixed inset-0 flex items-center justify-center z-100'>
                    <div className='bg-white w-9/12 border rounded-lg shadow-md relative flex-col'>
                        <div className='flex justify-between p-5 border-b'>
                            <h3 className='text-3xl font-semibold'>Add New Task</h3>
                            <button className='px-1 text-gray-400 float-right text-3xl leading-none font-semibold block' onClick={() => setAddModal(false)}>
                                X
                            </button>
                        </div>
                        <form action='' className='p-6'>
                            <label htmlFor='project-name' className='block uppercase text-gray-700 text-xs font-semibold mb-2'>
                                Project Name
                            </label>
                            <input
                                name='projectName'
                                value={projectName}
                                className='w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white'
                                id='project-name'
                                type='text'
                                placeholder='Project Name'
                                onChange={handleInput}
                            />
                            <label htmlFor='taskDescription' className='block uppercase text-gray-700 text-xs font-semibold mb-2'>
                                Task Description
                            </label>
                            <textarea
                                className='w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white'
                                id='task-description'
                                cols='3'
                                placeholder='Task Description'
                                name='taskDesc'
                                value={taskDesc}
                                onChange={handleInput}
                            ></textarea>
                            <div className='flex justify-end border-t pt-4'>
                                <button className='bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70' onClick={handleAdd}>
                                    Add Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
