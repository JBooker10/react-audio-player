import React, { useContext, useEffect } from "react";

import LibraryCTX, { Track } from "./../../context/library/libraryContext";
import MusicCTX from "./../../context/music/musicContext";

import { Container, Box } from "@material-ui/core";
import TrackCover from "./../Utils/TrackCover";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
      flexWrap: "wrap",
      alignContent: "flex-start"
    }
  })
);

const Albums = () => {
  const classes = useStyles();
  const ctx = useContext(LibraryCTX);
  const audio = useContext(MusicCTX);
  const { tracks, loading } = ctx;

  useEffect(ctx.getTracks, []);

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <Container
      style={{
        marginTop: "4em",
        color: "#fff"
      }}
    >
      <h1>Tracks</h1>
      <Box className={classes.box}>
        {tracks.length > 0 &&
          tracks.map((track: any) => (
            <TrackCover key={track.Hash} track={track} audio={audio} />
          ))}
      </Box>
    </Container>
  );
};

export default Albums;
