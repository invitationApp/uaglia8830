import { SET_USER_ACTION, setUserActionType } from '../Actions/UserActions';
import { Action } from 'redux';

const initUser = { signedIn: false };

interface ActionPayload { user: setUserActionType };
export const userReducer = (state = initUser, action: Action & ActionPayload) => {
    switch (action.type) {
        case SET_USER_ACTION:
            return { signedIn: true };
        default:
            return state;
    }
}