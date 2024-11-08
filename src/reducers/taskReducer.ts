import { TaskStatus } from "@/types/taskType";
import TaskAction from "../types/taskActionType";
import TaskGlobal from "../types/taskGlobalType";

export const taskReducer = (
    state: TaskGlobal,
    action: TaskAction
): TaskGlobal => {
    const { type } = action;

    switch (type) {
        case "ADD_TASK": {
            const _list = [...state.list];
            _list.push(action.payload);

            return { ...state, list: _list };
        }

        case "ADD_FAVORITE": {
            const _list = [...state.list];
            const taskIdx = _list.findIndex(
                listItem => listItem.id === action.id
            );

            if (taskIdx !== -1) {
                _list[taskIdx] = {
                    ..._list[taskIdx],
                    isFavorite: action.payload
                };
            }

            return { ...state, list: _list };
        }

        case "MODIFY_STATUS_COMPLETE": {
            const _list = [...state.list];
            const taskIdx = _list.findIndex(
                listItem => listItem.id === action.id
            );

            if (taskIdx !== -1) {
                _list[taskIdx] = {
                    ..._list[taskIdx],
                    status: TaskStatus.COMPLETED
                };
            }

            return { ...state, list: _list };
        }

        case "MODIFY_STATUS_INCOMPLETE": {
            const _list = [...state.list];
            const taskIdx = _list.findIndex(
                listItem => listItem.id === action.id
            );

            if (taskIdx !== -1) {
                _list[taskIdx] = {
                    ..._list[taskIdx],
                    status: TaskStatus.PENDING
                };
            }

            return { ...state, list: _list };
        }

        default:
            return state;
    }
};
