import { createContext } from "react";
import TaskGlobal from "../types/taskGlobalType";
import TaskAction from "../types/taskActionType";

const TaskContext = createContext<
    { state: TaskGlobal; dispatch: React.Dispatch<TaskAction> } | undefined
>(undefined);

export default TaskContext;
