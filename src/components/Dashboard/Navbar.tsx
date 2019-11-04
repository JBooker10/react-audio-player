import React, { useContext, useState, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Hidden,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NavMenu from "./NavMenu";
import SearchIcon from "@material-ui/icons/Search";
import {
  makeStyles,
  Theme,
  createStyles,
  fade
} from "@material-ui/core/styles";
import AuthContext from "./../../context/auth/authContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      // background: "#161616",
      background: "transparent",
      marginBottom: "4em",
      boxShadow: "none",
      //   borderBottom: "1px solid #181818",
      color: "#ccc",
      marginLeft: drawerWidth,
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`
      },

      toolbar: {
        padding: ".8em 0"
      }
    },
    grow: {
      flexGrow: 0.5
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: fade(theme.palette.common.black, 0.15)
      },
      border: "1px solid rgba(38,38,38, .5)",
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    icon: {
      height: 40,
      width: 40,
      marginLeft: 3
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: 300
      }
    }
  })
);

const HomeNavbar = ({ drawerToggle }: any): JSX.Element => {
  const authContext = useContext(AuthContext);
  const { logoutUser, user, loading } = authContext;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={drawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "Search" }}
            />
          </div>
          <div className={classes.grow} />
          <Button
            color="inherit"
            onClick={onClick}
            aria-controls="simple-menu"
            aria-haspopup="true"
          >
            <Hidden only={["sm", "xs"]}>
              {user && user.FirstName + " " + user.LastName}
            </Hidden>

            <AccountCircleIcon className={classes.icon} />
          </Button>
        </Toolbar>
      </AppBar>
      <NavMenu anchorEl={anchorEl} onClose={onClose} logoutUser={logoutUser} />
    </Fragment>
  );
};

export default HomeNavbar;
