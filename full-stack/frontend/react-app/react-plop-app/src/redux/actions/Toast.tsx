import { Dispatch } from 'redux';

// @ts-ignore
import { TOAST_CHANGE } from "ReduxConstants/ActionType";

export const ToastAction = (params: object) => (dispatch: Dispatch<any>) => {
    const { status }: any = params;

    dispatch({
        type: TOAST_CHANGE,
        status
    });
}