import React, { useState } from "react";
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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function SeasonsInfo({ season, index }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const history = useHistory();
  const classes = useStyles();

  const handleClick = (event) => {
    setOpenModal(true);
    console.log("==========event==========", event);
  };
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Modal open={openModal} onClose={handleClose}>
        <div style={modalStyle} className={classes.season}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
      <Grid className={classes.grid} key={index} item>
        <Card>
          <CardActionArea onClick={handleClick}>
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
