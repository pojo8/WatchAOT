// this will house the season component and some other stuff
import React, { useState, useEffect } from "react";
import EpisodeList from "./EpisodeList";
import { makeStyles } from "@material-ui/core/styles";

import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {};
});

//take ep # and retrieve [episode X season X] etc

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    fetch(`http://localhost:8080/api/findAllEpisodesReduced`, {
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

  useEffect(() => {
    fetch("http://localhost:8080/api/allSeasons", {
      method: "GET",
      headers: new Headers({}),
    })
      .then((res) => res.json())
      .then((res) => {
        setSeasons(res);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Episodes</h1>

      {isLoading && <CircularProgress />}
      <EpisodeList episodes={episodes} seasons={seasons} />
    </div>
  );
}

export default Episodes;
