import React from "react";
import Grid from "@material-ui/core/Grid";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayButton from "./PlayButton";
import AudioProgessBar from "./AudioProgressBar";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "#fff",
      flex: 0.333
    },
    playBack: {
      display: "flex",
      alignItems: "center",
      margin: "auto",

      justifyContent: "center"
    },
    icon: {
      fill: "#e2e1ff",
      width: "1.5em",
      height: "1.5em"
    },
    controls: {
      alignItems: "center",
      display: "flex"
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  })
);

const PlayBack = (props: any): JSX.Element => {
  const classes = useStyles();
  const { audio } = props;

  return (
    <div className={classes.root}>
      {audio.loaded && (
        <React.Fragment>
          <AudioProgessBar audio={audio} />
          <div className={classes.playBack}>
            <Grid>
              <Grid className={classes.controls}>
                <FastRewindIcon
                  className={classes.icon}
                  onClick={audio.rewindAudio}
                />
                <PlayButton audio={audio} />
                <FastForwardIcon className={classes.icon} />
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default PlayBack;
