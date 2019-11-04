import { IAuthState, IAuthAction } from "./authContext";
import { types } from "../types";


export const authReducer: React.Reducer<IAuthState, IAuthAction> = (state, action) => {
    switch (action.type) {
        case types.GET_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                loading: false
            };
        case types.LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case types.REMOVE_ERRORS:
            return {
                state: null,
                loading: false
            };
        case types.LOGOUT_USER:
        case types.LOGIN_FAIL:
        case types.AUTH_ERROR:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                errors: action.payload
            };
        default:
            return {
                ...state
            }
    }
};