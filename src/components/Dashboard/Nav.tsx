import React from "react";
// import Logo from "./../Icons/Logo";
import {
  Divider,
  List,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AlbumIcon from "@material-ui/icons/Album";
import MicIcon from "@material-ui/icons/Mic";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import FingerPrintIcon from "@material-ui/icons/Fingerprint";
import CodeIcon from "@material-ui/icons/Code";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      border: "1px solid #fff",
      color: "#fff",
      textTransform: "none",
      fontSize: "13px",
      borderRadius: 30,
      margin: "2em auto",
      display: "block"
    },

    toolbar: {
      padding: ".8em 0"
    },
    "&  a.is-active": {
      textDecoration: "none",
      background: "red !important"
    },
    list: {
      "& .MuiListItem-root": {
        color: "#fff",
        textDecoration: "none"
      },
      "& .MuiTypography-body1": {
        fontSize: ".9em",
        fontWeight: 100,
        textDecoration: "none"
      },
      "& .MuiListItemIcon-root": {
        minWidth: "44px"
      }
    },
    listHeader: {
      color: "#fff",
      margin: "0 1.5em",
      textTransform: "uppercase",
      "& h4": {
        marginTop: ".5em",
        fontSize: ".9em",
        marginBottom: 0
      }
    },
    icon: {
      fill: "#fff",
      width: ".85em",
      height: ".85em"
    },
    divider: {
      background: "rgba(38,38,38,.3)"
    },
    isActive: {
      background: "red"
    }
  })
);

const Nav = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar}>
        {/* <Logo color="#fff" height={38} width={38} /> */}
      </div>
      {/* <Divider className={classes.divider} /> */}
      <div className={classes.listHeader}>
        <h4>Library</h4>
      </div>
      <List className={classes.list}>
        <NavLink to="/home" activeClassName="is-active">
          <ListItem button>
            <ListItemIcon>
              <ScheduleIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Recently Added" />
          </ListItem>
        </NavLink>

        <NavLink to="/albums">
          <ListItem button>
            <ListItemIcon>
              <AlbumIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Albums" />
          </ListItem>
        </NavLink>

        <NavLink to="/artists">
          <ListItem button>
            <ListItemIcon>
              <MicIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Artist" />
          </ListItem>
        </NavLink>

        <NavLink to="/favorites">
          <ListItem button>
            <ListItemIcon>
              <FavoriteIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
        </NavLink>

        <NavLink to="/tracks">
          <ListItem button>
            <ListItemIcon>
              <LibraryMusicIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Tracks" />
          </ListItem>
        </NavLink>
      </List>
      {/* <Divider className={classes.divider} /> */}
      <div className={classes.listHeader}>
        <h4>Playlist</h4>
      </div>
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            <AddCircleIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Add to Playlist" />
        </ListItem>
      </List>
      <div className={classes.listHeader}>
        <h4>About</h4>
      </div>
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            <FingerPrintIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="About Project" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CodeIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="View Code" />
        </ListItem>
      </List>
      {/* <Divider className={classes.divider} /> */}
      <Button variant="outlined" className={classes.button}>
        Upload Audio
      </Button>
    </div>
  );
};

export default Nav;
