import React, { createContext, useState, useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import Playing, { PlayingSquare } from "./../Icons/Playing";
import MusicNote from "./../Icons/MusicNote";
import Play from "./../Icons/Play";
import Pause from "./../Icons/Pause";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "1em"
    },
    paper: {
      //   border: "1px solid rgba(38,38,38,.6)",
      background: "#181818",
      height: 170,
      width: 170,
      overFlow: "hidden",
      display: "flex",
      alignItems: "center",
      cursor: "pointer"
    },
    title: {
      color: "#e2e1ff",
      fontWeight: 700,
      fontSize: 14
    },
    subtitle: {
      fontSize: 12
    },
    image: {
      height: 170,
      width: 170,
      borderRadius: 3
    },
    play: {
      position: "absolute",
      width: 170,
      height: 170,
      display: "flex",
      alignSelf: "center",
      background: "rgba(0,0,0,.5)"
    }
  })
);

interface ITrack {
  trackTitle: string;
}

const TrackCover = (props: any): JSX.Element => {
  const classes = useStyles();
  const [playVisible, setPlayVisible] = useState(false);

  const {
    track: { Artist, Album },
    audio
  } = props;

  const isPlaying = audio.isPlaying && audio.uuid === props.track.Hash;

  const PlayIcon = (
    <div
      className={classes.play}
      onClick={() => {
        if (audio.uuid === props.track.Hash) {
          audio.playAudio();
        } else {
          audio.stopAudio();
          audio.getAudio(props.track.Stream, props.track.Hash, {
            artist: Artist.Name,
            track: props.track.Title,
            albumCover: Album.Cover,
            album: Album.Title
          });
        }
      }}
    >
      <Play color="#e2e1ff" height={80} width={80} />
    </div>
  );

  const PauseIcon = (
    <div className={classes.play} onClick={audio.pauseAudio}>
      <Pause color="#e2e1ff" height={80} width={80} className="" />
    </div>
  );

  const control = !isPlaying ? PlayIcon : PauseIcon;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {Album.CoverXL ? (
          <div
            onClick={() => setPlayVisible(isPlaying)}
            onMouseEnter={() => !isPlaying && setPlayVisible(!isPlaying)}
            onMouseLeave={() => setPlayVisible(isPlaying)}
          >
            {playVisible && control}
            <img src={Album.CoverXL} alt="" className={classes.image} />
          </div>
        ) : (
          <MusicNote color="#e2e1ff" height={70} width={70} />
        )}
      </Paper>
      <Typography className={classes.title}>{props.track.Title}</Typography>
      <Typography className={classes.subtitle}> {Artist.Name}</Typography>
      {isPlaying && <Playing />}
    </div>
  );
};

export default TrackCover;
