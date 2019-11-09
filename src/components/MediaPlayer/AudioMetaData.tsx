import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Hidden } from "@material-ui/core";
import MusicNote from "./../Icons/MusicNote";
import AlbumCover from "../Albums/AlbumCover";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "0 0 0 1em",
      flex: 0.333,
      color: "#fff",
      flexWrap: "nowrap",

      "& .MuiGrid-container": {
        flexWrap: "nowrap",
        alignItems: "center"
      }
    },
    paper: {
      background: "#181818",
      //   border: "1px solid rgba(38, 38, 38, .5)",
      height: 70,
      width: 70,
      display: "flex",
      alignItems: "center",
      borderRadius: "3px"
    },
    cover: {
      height: "inherit",
      width: "inherit",
      borderRadius: "3px"
    },
    grid: {
      margin: "0 0 0 1em"
    },
    subtitle1: {
      fontSize: 14,
      lineHeight: 1,
      whiteSpace: "nowrap"
    },
    title: {
      color: "#e2e1ff",
      fontWeight: 700
    }
  })
);

const AudioMetaData = (props: any): JSX.Element => {
  const { metaData } = props.audio;

  console.log(props.audio);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          {metaData && metaData.albumCover ? (
            <img src={metaData.albumCover} className={classes.cover} />
          ) : (
            <MusicNote color="#e2e1ff" height={35} width={35} />
          )}
        </Paper>
        <Hidden only="xs">
          <Grid item className={classes.grid}>
            <Typography className={classes.title}>
              {metaData && metaData.track}
            </Typography>
            {/* <Typography className={classes.subtitle1}>
              {metaData && metaData.album}
            </Typography> */}
            <Typography className={classes.subtitle1}>
              {metaData && metaData.artist}
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default AudioMetaData;
