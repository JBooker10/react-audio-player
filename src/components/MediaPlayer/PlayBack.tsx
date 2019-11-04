import React, { useState, useEffect, useContext } from "react";
import { Fab } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";

import {
  makeStyles,
  Theme,
  createStyles,
  fade
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    playBack: {
      display: "flex",
      alignItems: "center",
      margin: "auto",
      flex: 0.333
    },
    playbackIcon: {
      fill: "#e2e1ff",
      width: "2.2em",
      height: "2.2em"
    },
    icon: {
      fill: "#e2e1ff",
      width: "1.5em",
      height: "1.5em"
    },
    fab: {
      //   background: "rgba(38,38,38,.15)",
      background:
        "linear-gradient(90deg, rgba(255,78,78,1) 0%, rgba(255,64,109,1) 100%)",
      margin: "0 2.25em",
      //   boxShadow: "none",
      width: "60px",
      height: "60px",

      "&:hover": {
        background:
          "linear-gradient(90deg, rgba(255,78,78,1) 0%, rgba(255,64,109,1) 100%)"
      }
      // margin: theme.spacing(1)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  })
);

const PlayBack = (props: any): JSX.Element => {
  const [play, setPlay] = useState(false);
  const { audio } = props;
  const classes = useStyles();
  console.log(audio);

  const togglePlay = () => {
    if (!audio.isPlaying) {
      audio.playAudio();
    } else {
      audio.pauseAudio();
    }
  };

  // console.log(audioService.playing);

  return (
    <div className={classes.root}>
      <div className={classes.playBack}>
        <FastRewindIcon className={classes.icon} />
        <Fab
          onClick={() => togglePlay()}
          color="primary"
          aria-label="Add"
          className={classes.fab}
        >
          {audio.isPlaying ? (
            <PauseIcon
              className={classes.playbackIcon}
              onClick={audio.pauseAudio}
            />
          ) : (
            <PlayArrowIcon
              className={classes.playbackIcon}
              onClick={audio.getAudio}
            />
          )}
        </Fab>
        <FastForwardIcon className={classes.icon} />
      </div>
    </div>
  );
};

export default PlayBack;
