import Task from "@/types/taskType";
import TaskItem from "./TaskItem";
import { format } from "date-fns";
import { Input } from "../ui/input";
import React, { useEffect, useState } from "react";
import { matchSorter } from "match-sorter";

const TaskList: React.FC<{
    tasks: Task[];
}> = ({ tasks }) => {
    const [taskList, setTaskList] = useState<Task[]>([]);

    const filterList = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, "<------");

        // if (e.target.value) {
        const _list = matchSorter(tasks, e.target.value, {
            keys: ["name"]
        });
        setTaskList(_list);
        // }
    };

    useEffect(() => {
        setTaskList(tasks);
    }, [tasks]);

    return (
        <div>
            <h1 className="text-3xl font-semibold">My Day</h1>
            <span className="inline-block mt-2 text-muted-foreground">
                {format(new Date(), "EEEE, dd MMMM")}
            </span>

            <div className="px-px my-3">
                <Input onChange={filterList} placeholder="Type to search..." />
            </div>

            {!!taskList.length ? (
                <div>
                    {taskList.map(task => (
                        <TaskItem task={task} key={task.id} />
                    ))}
                </div>
            ) : (
                <div>Empty Tasks</div>
            )}
        </div>
    );
};

export default TaskList;
