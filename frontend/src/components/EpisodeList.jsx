import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import EnhancedTable from "./EnhancedTable";

const useStyles = makeStyles((theme) => {
  return {
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    container: {
      display: "flex",
    },
  };
});

function EpisodeList({ episodes, seasons }) {
  const rows = [];
  const classes = useStyles();
  const [season, setSeason] = useState(0);

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

  const handleChange = (event, newValue) => {
    setSeason(newValue);
  };

  function createData(number, title, season, views) {
    return { number, title, season, views };
  }

  episodes.forEach((episode) => {
    // since index starts at 0, we add 1 to make it equal to season numbers/id's
    if (season + 1 === episode.season_Id) {
      rows.push(
        createData(
          episode.episode_Number,
          episode.episode_Title,
          episode.season_Id,
          episode.views
        )
      );
    }
  });

  return (
    <div className={classes.container}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={season}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {seasons.map((season) => (
          <Tab label={"Season " + season.seasonId} />
        ))}
      </Tabs>
      <EnhancedTable headCells={headCells} rows={rows} />
    </div>
  );
}

export default EpisodeList;
