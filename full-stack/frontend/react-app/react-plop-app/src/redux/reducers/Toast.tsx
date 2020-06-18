// @ts-ignore
import { TOAST_CHANGE } from "ReduxConstants/ActionType";

const DefaultState = {
    type: "",
    status: ""
};

interface DefaultStateInterface {
    type: any,
    status: any
}

export const ToastReducer = (state = DefaultState, action: DefaultStateInterface) => {
    switch (action.type) {
        case TOAST_CHANGE:
            return { ...state, ...action };
        default:
            return state;
    }
}