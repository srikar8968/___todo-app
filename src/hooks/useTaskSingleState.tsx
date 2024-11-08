import { useContext } from "react";
import TaskContext from "../contexts/TaskContext";

const useTaskSingleState = (id: string | undefined) => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error(
            "useTaskSingleState must be used within a GlobalStateProvider"
        );
    }

    const tasks = context.state.list;

    return {
        task: tasks.find(task => task.id === id) || null,
        dispatch: context.dispatch
    };
};

export default useTaskSingleState;
