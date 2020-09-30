import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Home } from "@material-ui/icons";

// Installed Material UI to use as our User Interface library. merged with React-router-dom to create a nicely styled navbar.

const useStyles = makeStyles((theme) => {
  return {
    tabs: {
      backgroundColor: theme.palette.primary.main,
    },
  };
});

function Navbar() {
  const [tab, setTab] = useState({ value: 0 });
  const classes = useStyles();
  const handleChange = (event, value) => {
    setTab({ value });
  };

  // --note-- eventually the Home component/link will be replaced with our logo, if any.
  return (
    <>
      <Tabs
        value={tab.value}
        onChange={handleChange}
        indicatorColor={"secondary"}
        className={classes.tabs}
      >
        <Tab label={<Home />} to="/" component={Link} />
        <Tab label="Episodes" to="/episodes" component={Link} />
      </Tabs>
    </>
  );
}

export default Navbar;
