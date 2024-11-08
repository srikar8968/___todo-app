import useTaskState from "@/hooks/useTaskState";
import TaskBoardLayout from "../../layouts/TaskBoardLayout";

const MyDay = () => {
    const { state } = useTaskState();

    return <TaskBoardLayout tasks={state.list} />;
};

export default MyDay;
