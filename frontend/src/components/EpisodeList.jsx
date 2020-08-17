import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => {
  return {};
});

function EpisodeList({ episodes }) {
  console.log("==========episodes==========", episodes);
  const classes = useStyles();
  const rows = [];

  function createData(title, season, views, watchButton) {
    return { title, season, views, watchButton };
  }

  episodes.forEach((episode) =>
    rows.push(
      createData(episode.title, episode.season_Id, episode.views, "button")
    )
  );

  //TODO: for edach season, create new SEASONEPISODES component

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Episode Title</TableCell>
            <TableCell align="right">Season</TableCell>
            <TableCell align="right">Views</TableCell>
            <TableCell align="right">Watch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow hover key={index}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.season}</TableCell>
              <TableCell align="right">{row.views}</TableCell>
              <TableCell align="right">{row.watchButton}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EpisodeList;
