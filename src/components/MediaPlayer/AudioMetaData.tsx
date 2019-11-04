import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Hidden } from "@material-ui/core";
import MusicNote from "./../Icons/MusicNote";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "0 1em",
      flex: 0.333,
      color: "#fff"
    },
    paper: {
      background: "#181818",
      //   border: "1px solid rgba(38, 38, 38, .5)",
      height: 70,
      width: 70,
      display: "flex",
      alignItems: "center"
    },
    grid: {
      margin: "0 1em"
    },
    subtitle1: {
      fontSize: 12
    },
    title: {
      color: "#e2e1ff",
      fontWeight: 700
    }
  })
);

const AudioMetaData = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          <MusicNote color="#e2e1ff" height={35} width={35} />
        </Paper>
        <Hidden only="xs">
          <Grid item className={classes.grid}>
            <Typography className={classes.title}>Song Title</Typography>
            <Typography className={classes.subtitle1}>Album Unkown</Typography>
            <Typography className={classes.subtitle1}>Artist Unkown</Typography>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default AudioMetaData;
