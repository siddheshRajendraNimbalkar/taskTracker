// import { useEffect, useState } from "react";

// const EditTask = ({ task, index, taskList, setTaskList }) => {
//   const [editModule, setEditModule] = useState(false);
//   const [projectName, setProjectName] = useState("");
//   const [taskDesc, setTaskDesc] = useState("");

//   useEffect(() => {
//     setProjectName(task.projectName);
//     setTaskDesc(task.taskDesc);
//   }, [task]);

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     if (name === "projectName") setProjectName(value);
//     if (name === "taskDesc") setTaskDesc(value);
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     setTaskList((prevTaskList) =>
//       prevTaskList.map((item, i) => {
//         if (i === index) {
//           return { projectName, taskDesc };
//         }
//         return item;
//       })
//     );
//     setEditModule(false);
//   };

//   return (
//     <>
//       <button
//         className="bg-blue-600 text-white text-sm-uppercase font-semibold py-1.5 px-6 rounded-lg"
//         onClick={() => {
//           setEditModule(true);
//         }}
//       >
//         Edit
//       </button>
//       {editModule && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white w-96 border rounded-lg shadow-md">
//             <div className="flex justify-between p-5 border-b">
//               <h3 className="text-3xl font-semibold">Edit Task</h3>
//               <button
//                 className="text-gray-400 text-3xl font-semibold"
//                 onClick={() => setEditModule(false)}
//               >
//                 X
//               </button>
//             </div>
//             <form className="p-6">
//               <label
//                 htmlFor="project-name"
//                 className="block uppercase text-gray-700 text-xs font-semibold mb-2"
//               >
//                 Project Name
//               </label>
//               <input
//                 name="projectName"
//                 value={projectName}
//                 className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
//                 id="project-name"
//                 type="text"
//                 placeholder="Project Name"
//                 onChange={handleInput}
//               />
//               <label
//                 htmlFor="taskDescription"
//                 className="block uppercase text-gray-700 text-xs font-semibold mb-2"
//               >
//                 Task Description
//               </label>
//               <textarea
//                 name="taskDesc"
//                 value={taskDesc}
//                 className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
//                 id="task-description"
//                 cols="3"
//                 placeholder="Task Description"
//                 onChange={handleInput}
//               ></textarea>
//               <div className="flex justify-end border-t pt-4">
//                 <button
//                   className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70"
//                   onClick={handleUpdate}
//                 >
//                   Update Task
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EditTask;



import React, { useEffect, useState } from 'react';

const EditTask = ({ task, index, taskList, setTaskList }) => {
    const [editModule, setEditModule] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    useEffect(() => {
        setProjectName(task.projectName);
        setTaskDesc(task.taskDesc);
    }, [task]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'projectName') setProjectName(value);
        if (name === 'taskDesc') setTaskDesc(value);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setTaskList((prevTaskList) =>
            prevTaskList.map((item, i) => {
                if (i === index) {
                    return { projectName, taskDesc };
                }
                return item;
            })
        );
        setEditModule(false);
    };

    return (
        <>
            <button
                className='bg-blue-600 text-white text-sm-uppercase font-semibold py-1.5 px-6 rounded-lg'
                onClick={() => {
                    setEditModule(true);
                }}
            >
                Edit
            </button>
            {editModule && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='bg-white w-96 border rounded-lg shadow-md'>
                        <div className='flex justify-between p-5 border-b'>
                            <h3 className='text-3xl font-semibold'>Edit Task</h3>
                            <button className='text-gray-400 text-3xl font-semibold' onClick={() => setEditModule(false)}>
                                X
                            </button>
                        </div>
                        <form className='p-6'>
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
                                name='taskDesc'
                                value={taskDesc}
                                className='w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white'
                                id='task-description'
                                cols='3'
                                placeholder='Task Description'
                                onChange={handleInput}
                            ></textarea>
                            <div className='flex justify-end border-t pt-4'>
                                <button className='bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70' onClick={handleUpdate}>
                                    Update Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditTask;
