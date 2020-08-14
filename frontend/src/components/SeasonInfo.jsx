import React from "react";
import { useHistory } from "react-router-dom";
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
  console.log("==========season==========", season);
  const goToSeason = () => history.push(`/episodes/season/${season.seasonId}`);
  return (
    <Grid className={classes.grid} key={index} item>
      <Card>
        <ButtonBase onClick={goToSeason}>
          <CardActionArea>
            <CardMedia className={classes.cardmedia} image={season.thumbnail} />
            <CardContent className={classes.cardcontent}>
              <Typography variant="h5">{season.title}</Typography>
              <Typography variant="body2">{season.description}</Typography>
            </CardContent>
          </CardActionArea>
        </ButtonBase>
      </Card>
    </Grid>
  );
}

export default SeasonsInfo;
