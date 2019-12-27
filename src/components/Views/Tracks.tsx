import React, { useContext, useEffect, useState } from "react";
import LibraryCTX from "./../../context/library/libraryContext";
import MusicCTX from "./../../context/music/musicContext";
import { Container, Grid } from "@material-ui/core";
import TrackData from "../Tracks/TrackData";
import ListIcon from "@material-ui/icons/List";
import AppsIcon from "@material-ui/icons/Apps";

const Albums = () => {
  const ctx = useContext(LibraryCTX);
  const audio = useContext(MusicCTX);
  const [display, setDisplay] = useState(true);
  const { tracks, loading } = ctx;

  const toggleDisplay = () => setDisplay(!display);

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
      <Grid
        container
        alignItems="center"
        justify="space-between"
        style={{ padding: "1em" }}
      >
        <Grid item>
          <h1>Tracks</h1>
        </Grid>
        <Grid item>
          <div onClick={toggleDisplay}>
            {display ? (
              <AppsIcon fontSize="large" />
            ) : (
              <ListIcon fontSize="large" />
            )}
          </div>
        </Grid>
      </Grid>

      <TrackData tracks={tracks} audio={audio} display={display} />
    </Container>
  );
};

export default Albums;
