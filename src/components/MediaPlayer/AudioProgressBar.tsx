import React, { useEffect, useState, useRef } from "react";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    }
  })
);

const AudioProgessBar = ({ audio }: any) => {
  const [value, setValue] = useState(0);
  const [audioTime, setAudioTime] = useState("");
  const requestRef: any = useRef();
  const classes = useStyles();
  const fmtMSS = (s: any) => (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;

  const completed =
    audio.getCurrentTime() > audio.getDuration() &&
    audio.getCurrentTime() > 0 &&
    audio.getDuration() > 0;

  const animate = (time: any) => {
    setValue((audio.getCurrentTime() / audio.getDuration()) * 100);
    setAudioTime(fmtMSS(audio.getCurrentTime().toFixed(0)));
    requestRef.current = requestAnimationFrame(animate);
  };

  const onChange = (event: any, newValue: any) => {
    setValue(newValue as any);
  };

  useEffect(() => {
    if (!completed) {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }
  }, [animate, completed]);

  return (
    <Grid className={classes.slider}>
      <p>{completed ? fmtMSS(audio.getCurrentTime().toFixed(0)) : audioTime}</p>
      <Slider
        value={value}
        onChange={onChange}
        className={classes.progression}
        aria-labelledby="continuous-slider"
      />
      <p>{fmtMSS(audio.getDuration().toFixed(0))}</p>
    </Grid>
  );
};

export default AudioProgessBar;
