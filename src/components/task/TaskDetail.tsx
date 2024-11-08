import useTaskSingleState from "@/hooks/useTaskSingleState";
import { Navigate, useParams } from "react-router-dom";

const TaskDetail = () => {
    const { id } = useParams();
    const { task } = useTaskSingleState(id);

    return task ? (
        <div className="p-6">
            <h2 className="text-4xl mb-2">{task.name}</h2>
            <p>{task.notes}</p>
        </div>
    ) : (
        <Navigate to={"/"} replace />
    );
};

export default TaskDetail;
