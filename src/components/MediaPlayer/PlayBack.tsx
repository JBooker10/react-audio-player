import React, { useState, useEffect, useContext } from "react";
import { Fab } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
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
    playbackIcon: {
      fill: "#e2e1ff",
      width: "2em",
      margin: "0 .5em",
      height: "2em"
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
      width: "50px",
      height: "50px",

      "&:hover": {
        background:
          "linear-gradient(90deg, rgba(255,78,78,1) 0%, rgba(255,64,109,1) 100%)"
      }
      // margin: theme.spacing(1)
    },
    controls: {
      alignItems: "center",
      display: "flex"
    },
    slider: {
      display: "flex",
      alignItems: "center",

      "& p": {
        margin: "0 .5em",
        fontSize: 13,
        width: "50px",
        textAlign: "center"
      }
    },
    progression: {
      width: "33vw",

      "& .MuiSlider-rail": {
        height: "4px"
      },
      "& .MuiSlider-track ": {
        height: "4px"
      }
    },

    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  })
);

const PlayBack = (props: any): JSX.Element => {
  const [play, setPlay] = useState(false);
  const [value, setValue] = useState(0);
  const [audioTime, setAudioTime] = useState("");
  const { audio } = props;

  const requestRef: any = React.useRef();

  const classes = useStyles();

  const fmtMSS = (s: any) => (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue as any);
  };

  const animate = (time: any) => {
    // Change the state according to the animation
    setValue((audio.getCurrentTime() / audio.getDuration()) * 100);
    setAudioTime(fmtMSS(audio.getCurrentTime().toFixed(0)));
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // useEffect(() => progression(), [value]);

  const togglePlay = () => {
    if (!audio.isPlaying) {
      audio.playAudio();
    } else {
      audio.pauseAudio();
    }
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.slider}>
        <p>{audioTime}</p>
        <Slider
          value={value}
          onChange={handleChange}
          className={classes.progression}
          aria-labelledby="continuous-slider"
        />
        <p>{fmtMSS(audio.getDuration().toFixed(0))}</p>
      </Grid>
      <div className={classes.playBack}>
        <Grid>
          <Grid className={classes.controls}>
            <FastRewindIcon className={classes.icon} />

            <div onClick={() => togglePlay()}>
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
            </div>

            <FastForwardIcon className={classes.icon} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PlayBack;
