import React, { Fragment } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import SideNavbar from "./SideNavbar";
import MediaPlayer from "./../MediaPlayer/MediaPlayer";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      background: "#111111",
      minHeight: "100vh"
    },
    drawer: {
      "& .MuiPaper-root": {
        background: "#161616"
      },
      "& .MuiDrawer-paperAnchorDockedLeft": {
        border: "1px solid rgba(38,38,38,.3)"
      },
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
      "& .makeStyles-content-3": {
        marginTop: "4em"
      }
    }
  })
);

const Dashboard = (props: any) => {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const onClose = () => setMobileOpen(!mobileOpen);

  return (
    <Fragment>
      <div className={classes.root}>
        <Navbar drawerToggle={onClose} />
        <SideNavbar
          container={container}
          onClose={onClose}
          mobileOpen={mobileOpen}
        />
        <main className={classes.content}>{props.children}</main>
      </div>
      <MediaPlayer />
    </Fragment>
  );
};

export default Dashboard;
