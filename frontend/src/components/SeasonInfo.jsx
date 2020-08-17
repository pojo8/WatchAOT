import React from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  CardMedia,
  Card,
  Typography,
  CardContent,
  CardActionArea,
  ButtonBase,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    cardmedia: {
      height: "300px",
    },
    grid: {
      alignItems: "center",
      width: "350px",
    },
    cardcontent: {
      height: "150px",
      textOverflow: "ellipsis",
    },
  };
});

function SeasonsInfo({ season, index }) {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid className={classes.grid} key={index} item>
      <Card>
        <CardActionArea>
          <CardMedia className={classes.cardmedia} image={season.thumbnail} />
          <CardContent className={classes.cardcontent}>
            <Typography variant="h5">{season.title}</Typography>
            <Typography variant="body2">{season.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default SeasonsInfo;
