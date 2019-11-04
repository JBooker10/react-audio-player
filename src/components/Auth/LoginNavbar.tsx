import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Container } from "@material-ui/core";
// import Note from "./../Icons/Note";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const usePrimary = makeStyles({
  root: {
    background: "#fff",
    boxShadow: "none",
    color: "#ccc",
    position: "absolute"
  }
});

const LoginNavbar = (): JSX.Element => {
  const classes = useStyles();
  const primary = usePrimary();
  return (
    <div className={classes.root}>
      <AppBar className={primary.root} position="static" color="default">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              {/* <Note color="#ccc" height={30} width={30} /> */}
            </IconButton>

            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default LoginNavbar;
