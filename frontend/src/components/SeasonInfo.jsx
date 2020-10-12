import React, { useState, useCallback } from "react";
import CustomDialog from "./CustomDialog";
import EnhancedTable from "./EnhancedTable";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  Grid,
  CardMedia,
  Card,
  Typography,
  CardContent,
  CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    cardmedia: {
      height: "300px",
    },
    season: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
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
  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [isSending, setIsSending] = useState(false);

  function createData(number, title, season, views) {
    return { number, title, season, views };
  }

  const classes = useStyles();

  const headCells = [
    {
      id: "number",
      numeric: true,
      disablePadding: false,
      label: "Episode number",
    },
    { id: "title", numeric: false, label: "Title" },
    { id: "views", numeric: true, label: "Views" },
  ];

  const getSeasonEpisodes = useCallback(async (season) => {
    // need to refactor & add this to external helper
    await fetch("http://localhost:8080/api/episodesSeason/" + season.seasonId, {
      method: "GET",
      headers: new Headers({}),
    })
      .then((res) => res.json())
      .then((res) => {
        const rows = [];
        res.forEach((episode) => {
          rows.push(
            createData(
              episode.episode_Number,
              episode.episode_Title,
              episode.views
            )
          );
        });
        setRows(rows);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDialogOpen = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);
    await getSeasonEpisodes(season);
    setIsSending(false);
    setIsOpen(true);
  }, [isSending, season, getSeasonEpisodes]);

  const handleDialogClose = () => setIsOpen(false);

  return (
    <>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        title={`Season ${season.seasonId}`}
      >
        <EnhancedTable headCells={headCells} rows={rows} />
      </CustomDialog>
      <Grid className={classes.grid} key={index} item>
        <Card>
          <CardActionArea onClick={handleDialogOpen}>
            <CardMedia className={classes.cardmedia} image={season.thumbnail} />
            <CardContent className={classes.cardcontent}>
              <Typography variant="h5">{season.title}</Typography>
              <Typography variant="body2">{season.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}

SeasonsInfo.propTypes = {
  episodes: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default SeasonsInfo;
