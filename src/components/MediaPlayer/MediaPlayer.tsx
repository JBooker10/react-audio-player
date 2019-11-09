import React, { useContext } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import MusicCTX from "./../../context/music/musicContext";
import PlayBack from "./PlayBack";
import AudioMetaData from "./AudioMetaData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    audioControls: {
      height: 110,
      width: "100%",
      position: "fixed",
      bottom: 0,
      borderTop: "1px solid rgba(38,38,38,.5)",
      background: "#111111",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 10000,
      flex: 1
    },
    flex: {
      flex: 0.333
    }
  })
);

const MediaControls = (): JSX.Element => {
  const classes = useStyles();
  const audioCTX = useContext(MusicCTX);

  return (
    <div className={classes.audioControls}>
      <AudioMetaData audio={audioCTX} />
      <PlayBack audio={audioCTX} />
      <div className={classes.flex}>Hello World</div>
    </div>
  );
};

export default MediaControls;
