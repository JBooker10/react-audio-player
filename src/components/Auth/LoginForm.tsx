import React, { useState, useContext, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Grid, Button, Paper, Link as ButtonLink } from "@material-ui/core";
import AuthContext from "./../../context/auth/authContext";
import history from "./../../config/history";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useClasses = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    paper: {
      margin: "2em",
      background: "#fff",
      boxShadow: "none"
    },
    button: {
      borderRadius: 30,
      boxShadow: "none",
      padding: ".75em 0",
      fontWeight: 700,
      textTransform: "uppercase",
      background:
        "linear-gradient(90deg, rgba(255,78,78,1) 0%, rgba(255,64,109,1) 100%)",
      color: "white",
      "& :hover": {
        boxShadow: "none"
      }
    },
    textField: {
      //   background: "#f9f9f9",
      borderRadius: 3,
      margin: ".75em 0",
      "& label.Mui-focused": {
        color: "rgba(38, 38, 38, .8)"
      },
      "&  .Mui-error": {
        // color: "rgba(255,78,78,1) !important"
      },
      "& .Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255,78,78,1)"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgba(0,0,0,0.09)"
        },
        "&:hover fieldset": {
          borderColor: "rgb(72, 72, 216)"
        },
        "& .Mui-focused fieldset": {
          borderColor: "rgb(72, 72, 216)"
        },
        "& .MuiOutlinedInput-input": {
          color: "#181818"
        }
      }
    },
    formControlLabel: {
      "& svg.MuiSvgIcon-root": {
        fill: "rgba(38, 38, 38, .5)"
      },
      "& .MuiTypography-root": {
        color: "black",
        fontSize: "13px"
      }
    }
  })
);

interface IState {
  email: string;
  password: string;
  open: boolean;
}

const LoginForm: React.FC = ({ props }: any) => {
  const authContext = useContext(AuthContext);
  const { errors, loginUser, isAuthenticated } = authContext;
  const classes = useClasses();

  const [values, setValues] = useState<IState>({
    email: "",
    password: "",
    open: true
  });

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);

  const onChange = (name: keyof IState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    loginUser(values.email, values.password);
  };

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ padding: "3.5em 0" }}
      >
        <Grid item xs={10}>
          <Grid>
            <h2 style={{ textAlign: "center", color: "#3f51b5" }}>Login</h2>
          </Grid>
          <form onSubmit={onSubmit}>
            <Grid>
              <TextField
                className={classes.textField}
                error={errors && errors.code >= 400}
                onChange={onChange("email")}
                helperText={errors && errors.email}
                type="email"
                name="email"
                id="outlined-email-input"
                label="Email"
                margin="dense"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid>
              <TextField
                className={classes.textField}
                id="outlined-full-width"
                type="password"
                onChange={onChange("password")}
                error={errors && errors.code >= 400}
                helperText={errors && errors.password}
                label="Password"
                margin="dense"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <br />
            <Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.button}
              >
                Sign In
              </Button>
              <Grid
                style={{
                  textAlign: "center",
                  color: "#8d8d8d",
                  marginTop: "3em"
                }}
              >
                <small>
                  {" "}
                  Don't have an account?{" "}
                  <ButtonLink style={{ padding: 6 }}>Sign Up</ButtonLink>
                </small>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginForm;
