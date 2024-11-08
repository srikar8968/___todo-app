import EmptyTasksBox from "@/components/empty-box";
import TaskList from "@/components/task/TaskList";
import { ScrollArea } from "@/components/ui/scroll-area";
import Task from "@/types/taskType";
import React from "react";
import { Outlet } from "react-router-dom";

const TaskBoardLayout: React.FC<{
    tasks: Task[];
}> = ({ tasks }) => {
    return !!tasks.length ? (
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <ScrollArea style={{ minHeight: "calc(100vh - 100px)" }}>
                <TaskList tasks={tasks} />
            </ScrollArea>
            <ScrollArea
                style={{ minHeight: "calc(100vh - 100px)" }}
                className="rounded-xl bg-muted/50 shadow"
            >
                <Outlet />
            </ScrollArea>
        </div>
    ) : (
        <EmptyTasksBox />
    );
};

export default TaskBoardLayout;
