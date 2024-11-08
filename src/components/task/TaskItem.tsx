import React from "react";
import Task, { TaskStatus } from "../../types/taskType";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import useTaskState from "@/hooks/useTaskState";
import { Checkbox } from "../ui/checkbox";

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
    const { dispatch } = useTaskState();

    const onFavoriteHandler = () => {
        dispatch({
            type: "ADD_FAVORITE",
            id: task.id,
            payload: !task.isFavorite
        });
    };

    const onStatusChangeHandler = (checked: boolean | "indeterminate") => {
        if (checked) {
            dispatch({
                type: "MODIFY_STATUS_COMPLETE",
                id: task.id
            });
        } else {
            dispatch({
                type: "MODIFY_STATUS_INCOMPLETE",
                id: task.id
            });
        }
    };

    const isComplete = task.status === TaskStatus.COMPLETED;

    return (
        <Link
            to={`/t/${task.id}`}
            className={`flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight first:border-t last:border-b-0 hover:bg-sidebar-accent hover:text-accent-foreground ${isComplete &&
                "bg-sidebar-accent/50"}`}
        >
            <div className="flex w-full items-center gap-2">
                <span className="">
                    <Checkbox
                        onCheckedChange={onStatusChangeHandler}
                        checked={isComplete}
                    />
                </span>
                <span
                    className={`text-sm font-semibold ${isComplete &&
                        "line-through text-muted-foreground"}`}
                >
                    {task.name}
                </span>
                <span
                    className={`ml-auto text-xs ${isComplete &&
                        "text-muted-foreground"}`}
                >
                    {formatDistanceToNow(task.updatedAt)} ago
                </span>
                <Button
                    onClick={onFavoriteHandler}
                    variant={"link"}
                    className="pr-0 pl-2 inline-block text-orange-600"
                >
                    {task.isFavorite ? (
                        <StarFilledIcon size={20} />
                    ) : (
                        <Star size={20} />
                    )}
                </Button>
            </div>
        </Link>
    );
};

export default TaskItem;
