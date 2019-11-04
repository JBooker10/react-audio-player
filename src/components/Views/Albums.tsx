import React, { useContext, useEffect } from "react";

import LibraryCTX, { Album } from "./../../context/library/libraryContext";
import { Container, Box } from "@material-ui/core";
import AlbumCover from "./../Albums/AlbumCover";

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
  const { albums, loading } = ctx;

  useEffect(ctx.getAlbums, []);

  console.log(albums);

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
      <h1>Albums</h1>
      <Box className={classes.box}>
        {albums.length > 0 &&
          albums.map((album: Album) => <AlbumCover album={album} />)}
      </Box>
    </Container>
  );
};

export default Albums;
