import React from "react";
import SeasonInfo from "./SeasonInfo";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    griditems: { flexGrow: 1 },
    gridcontainer: {
      textAlign: "left",
    },
  };
});

function SeasonsThumbnails({ seasons }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridcontainer}>
      <Grid item className={classes.griditems}>
        <Grid container justify="center" spacing={5}>
          {seasons.map((season, index) => (
            <SeasonInfo season={season} index={index} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SeasonsThumbnails;
