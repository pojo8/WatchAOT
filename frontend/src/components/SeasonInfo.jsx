import React, { useState } from "react";
import CustomDialog from "./CustomDialog";
import { useHistory, Redirect, Link } from "react-router-dom";
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

  const history = useHistory();
  const classes = useStyles();

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
        <h1>HI THERE!</h1>
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
