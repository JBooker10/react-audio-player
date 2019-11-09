import React, { useReducer, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import jwt_decode from "jwt-decode";

import history from "./../../config/history";
import { authReducer } from "./authReducer";
import AuthContext, { IAuthState, IAuthAction } from "./authContext";
import { AuthorizeToken } from "./../../config/AuthorizeToken";
import { types } from "./../types";

const api = "http://localhost:8000/v1";

const AuthenticationState = (props: any): JSX.Element => {
  const initialState: IAuthState = {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    loading: true,
    token: localStorage.getItem("token"),
    errors: {} as any,
    user: {} as any
  };

  const [state, dispatch] = useReducer<React.Reducer<IAuthState, IAuthAction>>(
    authReducer,
    initialState
  );

  useEffect(() => {
    try {
      jwt_decode(state.token);
      getUser();
    } catch (err) {
      dispatch({
        type: types.AUTH_ERROR,
        payload: err,
        errors: err,
        user: {}
      });
    }
  }, [state.token]);

  const loginUser = async (email: string, password: string): Promise<void> => {
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    const data = {
      Email: email,
      Password: password
    };
    try {
      const res: AxiosResponse<any> = await axios.post(
        api + "/auth/login",
        data,
        config
      );
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data.token,
        errors: null,
        user: {}
      });
      getUser();
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: types.LOGIN_FAIL,
        payload: err.response.data || err,
        errors: err.response.data || err,
        user: {}
      });
      setTimeout(
        () =>
          dispatch({
            type: types.REMOVE_ERRORS,
            payload: {},
            errors: {},
            user: {}
          }),
        3500
      );
    }
  };

  const getUser = async (): Promise<void> => {
    if (localStorage.token) {
      AuthorizeToken(localStorage.token);
    }
    try {
      const res: AxiosResponse<any> = await axios.get(api + "/home");
      dispatch({
        type: types.GET_USER,
        payload: res.data,
        errors: {},
        user: res.data
      });
    } catch (err) {
      dispatch({
        type: types.LOGIN_FAIL,
        payload: err.response.data || err,
        errors: err.response.data || err,
        user: {}
      });
    }
  };

  const logoutUser = () => {
    dispatch({
      type: types.LOGOUT_USER,
      payload: {},
      errors: {},
      user: {}
    });
    history.push("/");
  };

  const { loading, errors, token, isAuthenticated, user } = state;
  return (
    <AuthContext.Provider
      value={{
        loading,
        errors,
        token,
        isAuthenticated,
        loginUser,
        logoutUser,
        getUser,
        user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthenticationState;
