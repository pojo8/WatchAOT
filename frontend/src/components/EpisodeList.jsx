import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import EnhancedTable from "./EnhancedTable";
import TabPanel from "./TabPanel";

const useStyles = makeStyles((theme) => {
  return {};
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
    // season 
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
    <>
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
      {seasons.map((season) => (
        <TabPanel value={season} index={season}></TabPanel>
      ))}
      <EnhancedTable headCells={headCells} rows={rows} />
    </>
  );
}

export default EpisodeList;
