import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EnhancedTable from "./EnhancedTable";

const useStyles = makeStyles((theme) => {
  return {};
});

function EpisodeList({ episodes }) {
  const rows = [];
  const classes = useStyles();

  const headCells = [
    {
      id: "number",
      numeric: true,
      disablePadding: false,
      label: "Episode number",
    },
    { id: "title", numeric: false, label: "Title" },
    { id: "season", numeric: true, label: "Season" },
    { id: "views", numeric: true, label: "Views" },
  ];

  function createData(number, title, season, views) {
    return { number, title, season, views };
  }

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

  return <EnhancedTable headCells={headCells} rows={rows} />;
}

export default EpisodeList;
