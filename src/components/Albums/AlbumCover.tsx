import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MusicNote from "./../Icons/MusicNote";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "1em 2em 1em 0"
    },
    paper: {
      //   border: "1px solid rgba(38,38,38,.3)",
      background: "#111111",
      height: 185,
      width: 185,
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
      height: "inherit",
      width: "inherit",
      borderRadius: 3
    }
  })
);

interface ITrack {
  trackTitle: string;
}

const AlbumCover = ({ album }: any): JSX.Element => {
  const classes = useStyles();
  const { CoverBig, Title, RecordLabel, Hash } = album;

  return (
    <Link to={`albums/${Hash}`}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          {CoverBig ? (
            <img src={CoverBig} alt="" className={classes.image} />
          ) : (
            <MusicNote color="#e2e1ff" height={70} width={70} />
          )}
        </Paper>
        <Typography className={classes.title}>{Title}</Typography>
        <Typography className={classes.subtitle}>{RecordLabel}</Typography>
      </div>
    </Link>
  );
};

export default AlbumCover;
