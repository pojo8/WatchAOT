import React, { useState, useEffect } from "react";
import CustomDialog from "./CustomDialog";
import EnhancedTable from "./EnhancedTable";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  CardMedia,
  Card,
  Typography,
  CardContent,
  CardActionArea,
  Modal,
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
      position: "fixed",
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
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // get seasonsbyid

  useEffect(() => {
    fetch("http://localhost:8080/api/episodesSeason/" + season.seasonId, {
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

  function createData(number, title, season, views) {
    return { number, title, season, views };
  }

  const history = useHistory();
  const classes = useStyles();

  const rows = [];
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

  console.log("==========season==========", season);

  episodes.forEach((episode) => {
    // since index starts at 0, we add 1 to make it equal to season numbers/id's
    rows.push(
      createData(episode.episode_Number, episode.episode_Title, episode.views)
    );
  });

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const handleDialogClose = () => setIsOpen(false);

  return (
    <>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        title="TESTING"
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

export default SeasonsInfo;
