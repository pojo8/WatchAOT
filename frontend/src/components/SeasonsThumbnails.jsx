import React from "react";
import SeasonInfo from "./SeasonInfo";
import PropTypes from "prop-types";
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

function SeasonsThumbnails({ seasons, episodes }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridcontainer}>
      <Grid item className={classes.griditems}>
        <Grid container justify="center" spacing={5}>
          {seasons.map((season, index) => (
            <SeasonInfo season={season} episodes={episodes} index={index} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

SeasonsThumbnails.propTypes = {
  episodes: PropTypes.array.isRequired,
  seasons: PropTypes.array.isRequired,
};

export default SeasonsThumbnails;
