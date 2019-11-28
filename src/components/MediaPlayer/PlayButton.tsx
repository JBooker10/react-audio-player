import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    playbackIcon: {
      fill: "#e2e1ff",
      width: "2em",
      margin: "0 .5em",
      height: "2em"
    }
  })
);

const PlayButton = ({ audio }: any) => {
  const togglePlay = () => {
    !audio.isPlaying ? audio.playAudio() : audio.pauseAudio();
  };

  const classes = useStyles();
  return (
    <div onClick={() => togglePlay()}>
      {audio.isPlaying ? (
        <PauseIcon
          className={classes.playbackIcon}
          onClick={audio.pauseAudio}
        />
      ) : (
        <PlayArrowIcon
          className={classes.playbackIcon}
          onClick={audio.playAudio}
        />
      )}
    </div>
  );
};

export default PlayButton;
