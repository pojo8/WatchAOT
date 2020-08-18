import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Button,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => {
  return {
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  };
});

function EpisodeList({ episodes }) {
  console.log("==========episodes==========", episodes);
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("number");
  const rows = [];

  function createData(number, title, season, views, watchButton) {
    return { number, title, season, views, watchButton };
  }

  function clicked(e) {
    console.log("==========e==========", e);
  }

  const onRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    console.log("==========order==========", order);
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    // console.log("==========headcellID==========", property);
    onRequestSort(event, property);
  };

  const headCells = [
    {
      id: "number",
      numeric: true,
      disablePadding: true,
      label: "Episode number",
    },
    { id: "title", numeric: false, disablePadding: false, label: "Title" },
    { id: "season", numeric: true, disablePadding: false, label: "Season" },
    { id: "views", numeric: true, disablePadding: false, label: "Views" },
  ];

  episodes.forEach((episode) =>
    rows.push(
      createData(
        episode.episode_Number,
        episode.episode_Title,
        episode.season_Id,
        episode.views
      )
    )
  );

  //TODO: for edach season, create new SEASONEPISODES component

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? "right" : "left"}
                padding={headCell.disablePadding ? "none" : "default"}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow hover key={index}>
              <TableCell>{row.number}</TableCell>
              <TableCell onClick={clicked} component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.season}</TableCell>
              <TableCell align="right">{row.views}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EpisodeList;
