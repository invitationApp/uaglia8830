import { Dispatch } from "react-redux";

export const SET_USER_ACTION = 'SET_USER_ACTION';
export type setUserActionType = string;
export const setUser = (user: string) => ({
    type: SET_USER_ACTION,
    user
});

export function signIn(userName: string, password: string) {
    return function (dispatch: Dispatch) {
        dispatch(setUser('hi'));
    }
};