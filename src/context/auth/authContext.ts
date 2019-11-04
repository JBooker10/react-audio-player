import { createContext } from "react";


export interface IAuthState {
    loading: boolean;
    errors: any;
    token: any;
    isAuthenticated: boolean;
    user: any
}


export interface IAuthAction {
    type: string;
    payload: any;
    errors: any;
    user: any;
}

const defaultValue = {} as any;

const authContext = createContext(defaultValue);

export default authContext;