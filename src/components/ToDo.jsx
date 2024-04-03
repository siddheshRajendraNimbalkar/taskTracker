import React, { useState } from "react";
import { useDrag } from "react-dnd";
import EditTask from "./EditTask";
import Stopwatch from "./Stopwatch";

const ToDo = ({ task, index, taskList, setTaskList }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "todo",
        item: {
            id: index,
            projectName: task.projectName,
            taskDesc: task.taskDesc,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const handleDelete = () => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
    };

    return (
        <div ref={drag} className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
            <div className="w-full flex flex-row justify-between">
                <p className="font-semibold text-xl w-4/5">{task.projectName}</p>
                <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList} />
            </div>
            <p className="text-lg py-2">{task.taskDesc}</p>
            <Stopwatch />
            <div className="w-full flex justify-center">
                <button className="bg-red-500 text-white font-semibold py-1.5 px-3 mt-6 mb-1 rounded-lg" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default ToDo;
