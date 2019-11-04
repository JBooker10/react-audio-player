import React from "react";
import { Drawer, Hidden } from "@material-ui/core";

import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import Nav from "./Nav";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      "& .MuiPaper-root": {
        // background: "transparent"
        background: "#111111"
        // background: "#181818"
      },
      "& .MuiDrawer-paperAnchorDockedLeft": {
        border: "1px solid rgba(38,38,38,.3)"
      },
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

interface ResponsiveDrawerProps {
  container: Element;
  onClose: () => void;
  mobileOpen: boolean;
}

const SideNav = (props: ResponsiveDrawerProps): JSX.Element => {
  const classes = useStyles();
  const { container, onClose, mobileOpen } = props;
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="Mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={onClose}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <Nav />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          <Nav />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideNav;
