import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { NotebookPen } from "lucide-react";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import useTaskState from "@/hooks/useTaskState";
import Task, { TaskStatus } from "@/types/taskType";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { formatISO } from "date-fns";

const initState = {
    id: "",
    name: "",
    notes: "",
    status: "",
    isFavorite: false,
    createdAt: "",
    updatedAt: ""
};

const AddTaskModal: React.FC = () => {
    const [error, setError] = useState<boolean>(false);
    const [task, setTask] = useState<Task>({ ...initState });
    const { dispatch } = useTaskState();

    const onInputChangeHandler = (name: string) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setTask({
            ...task,
            [name]: e.target.value
        });
    };

    const onSubmitHandler = () => {
        if (!task.name.length) {
            setError(true);
            return;
        }

        const _task = {
            id: (Math.random() + 1).toString(36).substring(2),
            name: task.name,
            notes: task.notes,
            status: TaskStatus.PENDING,
            isFavorite: false,
            createdAt: formatISO(new Date()),
            updatedAt: formatISO(new Date())
        };

        dispatch({ type: "ADD_TASK", payload: _task });
        setTask({ ...initState });
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>
                    <NotebookPen /> Add Task
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle>Create new Task</SheetTitle>
                    <SheetDescription>
                        Please fill out below details.
                    </SheetDescription>
                </SheetHeader>

                {error && (
                    <Alert variant="destructive" className="mt-4">
                        <ExclamationTriangleIcon className="h-4 w-4" />
                        <AlertTitle className="">
                            Title field is required
                        </AlertTitle>
                        <AlertDescription>
                            Please fill out before continue
                        </AlertDescription>
                    </Alert>
                )}

                <div className="my-4">
                    <Input
                        value={task.name}
                        onChange={onInputChangeHandler("name")}
                        id="name"
                        className="mb-4"
                        placeholder="Title*"
                    />
                    <Textarea
                        value={task.notes}
                        onChange={onInputChangeHandler("notes")}
                        id="notes"
                        className="mb-4"
                        placeholder="Add Notes"
                        rows={4}
                    />
                </div>

                <SheetFooter>
                    <SheetClose asChild>
                        <Button onClick={onSubmitHandler}>Add Task</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default AddTaskModal;
