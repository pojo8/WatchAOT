import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Episodes from "./components/Episodes";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    pagecontainer: {
      position: "relative",
      minHeight: "100vh",
    },
    contentwrap: {
      padding: "3rem",
    },
    footercontainer: {
      position: "absolute",
      height: "3rem",
      width: "100%",
      textAlign: "center",
      bottom: 0,
    },
    paper: {
      padding: "2em",
    },
  };
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.pagecontainer}>
      <BrowserRouter>
        <Navbar />
        <div className={classes.contentwrap}>
          <Paper elevation={2} className={classes.paper}>
            <Switch>
              <main>
                <Route path="/" exact component={Home} />
                <Route path="/episodes" exact component={Episodes} />
              </main>
            </Switch>
          </Paper>
        </div>
        <div class={classes.footercontainer}>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
