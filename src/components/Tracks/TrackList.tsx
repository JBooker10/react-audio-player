import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";

import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    color: "#ccc",
    "& .MuiTableCell-head": {
      color: "#ccc"
    },
    "& .MuiTableCell-body": {
      color: "#ccc"
    }
  }
});

const TrackList = ({ track, audio }: any) => {
  return (
    <React.Fragment>
      <TableRow>
        <TableCell align="left">
          <img src={track.Album.Cover} alt="" height="70px" />
        </TableCell>
        <TableCell>{track.Title}</TableCell>
        <TableCell>{track.Album.Title}</TableCell>
        <TableCell>{track.Artist.Name}</TableCell>
        <TableCell>{track.Genre}</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default TrackList;
