import React, { useState, useEffect } from "react";
import SeasonsThumbnails from "./SeasonsThumbnails";

import { CircularProgress } from "@material-ui/core";

function Seasons() {
  const [seasons, setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div>
      <h1>Seasons</h1>
      {isLoading && <CircularProgress />}
      <SeasonsThumbnails seasons={seasons} episodes={episodes} />
    </div>
  );
}

export default Seasons;
