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

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Route path="/about" component={About} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
