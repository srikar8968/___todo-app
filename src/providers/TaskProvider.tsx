import React, { useReducer } from "react";
import TaskContext from "../contexts/TaskContext";
import { taskReducer } from "../reducers/taskReducer";
import TaskGlobal from "../types/taskGlobalType";

interface TaskProviderProps {
    children: React.ReactNode;
}

const initialState: TaskGlobal = {
    list: []
};

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
