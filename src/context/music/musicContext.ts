import { createContext } from "react";






export interface IAction {
    type: string;
    payload: {};
    errors: any;
}

export interface IState {
    loading: boolean,
    audioData: any,
}


const defaultValue = {} as any;

const musicContext = createContext(defaultValue);
export default musicContext;