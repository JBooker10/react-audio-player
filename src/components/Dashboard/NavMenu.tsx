import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      left: "100px",
      "& .MuiList-root": {
        // background: "#181818",

        border: "none",
        color: "#ccc",
        width: "225px"
      },

      "&  .MuiMenu-paper": {
        background: "#181818"
      },
      "& .MuiList-padding": {
        padding: "0"
      }

      // "& .MuiTouchRipple-root": {
      //   top: 60
      // }
    },
    paper: {
      marginRight: theme.spacing(2)
    }
  })
);

const NavMenu = (props: any) => {
  const { anchorEl, onClose, logoutUser } = props;
  const classes = useStyles();

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
      className={classes.root}
      style={{ top: "50px" }}
    >
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem onClick={onClose}>My account</MenuItem>
      <MenuItem onClick={logoutUser}>Logout</MenuItem>
    </Menu>
  );
};

export default NavMenu;
