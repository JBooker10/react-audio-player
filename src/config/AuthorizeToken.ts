import axios from "axios";

export const AuthorizeToken = (token: string | boolean): string | void => {
    token
        ? (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`)
        : delete axios.defaults.headers.common["Authorization"];
};
