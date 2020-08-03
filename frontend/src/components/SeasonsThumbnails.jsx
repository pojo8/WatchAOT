import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  CardMedia,
  Card,
  Typography,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    cardmedia: {
      height: 140,
    },
    grid: {
      alignItems: "center",
    },
  };
});

function SeasonsThumbnails({ seasons }) {
  const classes = useStyles();

  return (
    <Grid container style={{ flexGrow: 1 }}>
      <Grid item>
        <Grid container justify="center" spacing={5}>
          {seasons.map((season, index) => (
            <Grid className={classes.grid} key={index} item>
              <Card>
                <CardMedia
                  className={classes.cardmedia}
                  image="https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w"
                />
                <CardContent>
                  <Typography variant="body2">{season.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SeasonsThumbnails;
