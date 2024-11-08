import AddTaskModal from "./task/AddTaskModal";
import { AspectRatio } from "./ui/aspect-ratio";
import emptyTaskImg from "@/assets/empty-tasks.svg";

const EmptyTasksBox = () => {
    return (
        <div className="max-w-72 w-full m-auto">
            <AspectRatio ratio={16 / 9}>
                <img
                    src={emptyTaskImg}
                    className="max-w-full h-full rounded-md object-cover"
                />
            </AspectRatio>
            <div className="mt-6 text-center">
                <AddTaskModal />
            </div>
        </div>
    );
};

export default EmptyTasksBox;
