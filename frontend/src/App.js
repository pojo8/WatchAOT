import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Episodes from "./components/Episodes/Episodes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

// anything within the Router component has access to its capabilities
// (in our case this will be mapping url paths to certain components so
// they display only when were on those pages)
// remember that we are using react-router-dom which is one of many router plugins (best one imo)
// remind me to explain SWITCH and EXACT (below)

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/episodes" exact component={Episodes} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

// You can think of these components as "pages"
// in your app.
