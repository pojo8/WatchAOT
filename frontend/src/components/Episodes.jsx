// this will house the season component and some other stuff
import React, { useState, useEffect } from "react";
import SeasonsThumbnails from "./SeasonsThumbnails";
import { makeStyles } from "@material-ui/core/styles";

import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {};
});

//take ep # and retrieve [episode X season X] etc

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [season, setSeason] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    fetch(`http://localhost:8080/api/episodesSeason/:seasonId`, {
      method: "GET",
      headers: new Headers({}),
    })
      .then((res) => res.json())
      .then((res) => {
        setSeason(res);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/api/findAllEpisodes`, {
      method: "GET",
      headers: new Headers({}),
    })
      .then((res) => res.json())
      .then((res) => {
        setEpisodes(res);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);


  console.log('==========season==========', season);
  console.log('==========episodes==========', episodes);
  
  return <div>{/* list of episodes */}</div>;
}

export default Episodes;
