import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import LoginNavbar from "./../Auth/LoginNavbar";
import LoginForm from "./../Auth/LoginForm";

const Login = (): JSX.Element => {
  return (
    <Fragment>
      <LoginNavbar />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: "100vh", background: "#f9f9f9" }}
      >
        <Grid item xs="auto" />
        <Grid item lg={4} md={4} sm={6} xs={9}>
          <LoginForm />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Login;
