import Task from "./taskType";

type TaskAction =
    | { type: "ADD_TASK"; payload: Task }
    | { type: "ADD_FAVORITE"; id: string; payload: boolean }
    | { type: "MODIFY_STATUS_COMPLETE"; id: string }
    | { type: "MODIFY_STATUS_INCOMPLETE"; id: string }
    | { type: "UPDATE_TASK"; id: string; payload: Task }
    | { type: "REMOVE_TASK"; id: string };

export default TaskAction;
