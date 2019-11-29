import React from "react";
import { Grid } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "#fff",
      flex: 0.333,
      display: "flex",
      justifyContent: "flex-end",
      margin: "0 1em 0 0"
    },
    "& .MuiGrid-root": {
      width: 200,
      padding: "0 1em"
    }
  })
);

const Volume = (props: any): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className={classes.root}>
      <Grid container lg={4}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
};

export default Volume;
