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
      {/* site desc/introduction 
      or other component goes here */}
      <Seasons />
    </div>
  );
}

export default Home;
