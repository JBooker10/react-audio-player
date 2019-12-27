import React from "react";
import TrackCover from "./TrackCover";
import { Box } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TrackList from "./TrackList";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";

import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
      flexWrap: "wrap",
      alignContent: "flex-start"
    },
    table: {
      minWidth: 650,
      color: "#ccc",
      "& .MuiTableCell-head": {
        color: "#ccc"
      },
      "& .MuiTableCell-body": {
        color: "#ccc",
        borderBottom: "1px solid rgba(255,255,255,.05)"
      }
    }
  })
);

const TrackData = ({ tracks, audio, display }: any) => {
  const classes = useStyles();

  return display ? (
    <Box className={classes.box}>
      {tracks.length > 0 &&
        tracks.map((track: any) => (
          <TrackCover key={track.Hash} track={track} audio={audio} />
        ))}{" "}
    </Box>
  ) : (
    <Table
      className={classes.table}
      aria-label="simple table"
      style={{ borderCollapse: "collapse" }}
    >
      <TableBody>
        {tracks.length > 0 &&
          tracks.map((track: any) => <TrackList track={track} audio={audio} />)}
      </TableBody>
    </Table>
  );
};

export default TrackData;
