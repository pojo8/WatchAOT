import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: 'center',
    height: 40,
    bottom: 0,
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <p>Copyright © AotWatcher 2020</p>
    </div>
  );
}

export default Footer;
