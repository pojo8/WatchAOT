import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => {
  return {};
});

function VideoPlayer({ title, source }) {
  const classes = useStyles();

  return (
    <ReactPlayer
      url="https://cn60jon5hl.mstreamcdn.com/l/eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDMzNDU3MTgsImRhdGEiOlsiMTQ2LjE5OC4yMzkuMTA5IiwiN3lsYjRqMDQxNW44IiwibiIsMl19.vT-AVF3AfQGADsS7maoE7FYs1NpEK7q6T255xnuLo5I.mp4"
      controls={true}
      width="100%"
      height="100%"
    />
  );
}

export default VideoPlayer;

VideoPlayer.propTypes = {};
