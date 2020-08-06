import React, { useState, useEffect } from "react";
import SeasonsThumbnails from "./SeasonsThumbnails";
import { makeStyles } from "@material-ui/core/styles";

import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {};
});

//take ep # and retrieve [episode X season X] etc

function Seasons() {
  const [seasons, setSeasons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

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
      <h1>Seasons</h1>
      {isLoading && <CircularProgress />}
      <SeasonsThumbnails seasons={seasons} />
    </div>
  );
}

export default Seasons;
