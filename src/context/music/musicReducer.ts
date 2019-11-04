import { IState, IAction } from "./musicContext"
import { types } from "../types";

export const musicReducer: React.Reducer<IState | any, IAction> = (state, action) => {
    switch (action.type) {
        case types.PLAY_TRACK:
            return {
                ...state,
                audioData: action.payload,
                loading: false,
                isPlaying: true,
            };
        case types.PAUSE_TRACK:
            return {
                ...state,
                isPlaying: false,
                loading: false
            };
        default:
            throw new Error();
    }
}