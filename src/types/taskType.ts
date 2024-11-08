enum TaskStatus {
    COMPLETED = "COMPLETED",
    PENDING = "PENDING",
    TRASH = "TRASH"
}

type Task = {
    id: string;
    name: string;
    notes: string;
    status: TaskStatus;
    isFavorite: boolean;
    createdAt: string;
    updatedAt: string;
};

export { TaskStatus };

export default Task;
