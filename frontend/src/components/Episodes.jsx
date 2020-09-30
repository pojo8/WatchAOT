import React, { useState, useEffect } from "react";
import EpisodeList from "./EpisodeList";

import { CircularProgress } from "@material-ui/core";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
