import React from "react";
import Seasons from "./Seasons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    home: {
      textAlign: "center",
    },
  };
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <h1>Home</h1>
      <p>
        Created by two software engineers as an ongoing side project,
        WatchAOTepisodes is a site where you can, you guessed it, watch Attack
        on Titan! We aim to upload episodes as soon as they become available, so
        hopefully this becomes your go-to location for your Attack on Titan
        binge watching needs!
      </p>

      {/* latest attack on titan episodes component */}
      <Seasons />
    </div>
  );
}

export default Home;
