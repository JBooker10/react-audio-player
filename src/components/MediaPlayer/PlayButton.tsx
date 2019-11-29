import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    playbackIcon: {
      fill: "#e2e1ff",
      width: "2em",
      margin: "0 .5em",
      height: "2em"
    },
    button: {
      background:
        "linear-gradient(90deg, rgba(255,78,78,1) 0%, rgba(255,64,109,1) 100%)",
      boxShadow: "none",
      height: 35,
      fontWeight: 700,
      borderRadius: 30,
      margin: ".5em 0",
      width: 100,
      color: "white",
      textTransform: "none"
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

export const SecondaryPlayButton = ({ audio, track }: any) => {
  const playAud = () => {
    if (audio.uuid === track.Hash) {
      audio.playAudio();
    } else {
      audio.stopAudio();
      audio.getAudio(track.Stream, track.Hash, {
        artist: track.Artist.Name,
        track: track.Title,
        albumCover: track.Album.Cover,
        album: track.Album.Title
      });
    }
  };
  const classes = useStyles();

  const isPlaying = audio.isPlaying && audio.uuid === track.Hash;

  return (
    <React.Fragment>
      {!isPlaying ? (
        <Button className={classes.button} onClick={playAud}>
          Play
        </Button>
      ) : (
        <Button className={classes.button} onClick={audio.pauseAudio}>
          Pause
        </Button>
      )}
    </React.Fragment>
  );
};

export default PlayButton;
