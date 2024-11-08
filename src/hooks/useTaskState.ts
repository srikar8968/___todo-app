import { useContext } from "react";
import TaskContext from "../contexts/TaskContext";

const useTaskState = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error(
            "useTaskState must be used within a GlobalStateProvider"
        );
    }

    return context;
};

export default useTaskState;
