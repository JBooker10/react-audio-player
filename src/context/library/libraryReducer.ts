import { IAction, IState } from "./libraryContext";
import { types } from "../types";


export const libraryReducer: React.Reducer<IState | any, IAction> = (
    state,
    action
) => {
    switch (action.type) {
        case types.GET_TRACKS:
            return {
                ...state,
                tracks: action.payload,
                loading: false
            };
        case types.GET_ARTISTS:
            return {
                ...state,
                artists: action.payload,
                loading: false
            };
        case types.GET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                loading: false
            };
        case types.GET_ALBUM:
            return {
                ...state,
                album: action.payload,
                loading: false
            }
        default:
            throw new Error();
    }
}