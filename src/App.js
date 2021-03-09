import React from "react";
import { Route, HashRouter } from "react-router-dom";

// Styling

import "./App.css";

// Components
import Home from "./components/pages/Home";
import legalStuff from "./components/pages/LegalStuff";
import Header from "./components/layout/Header";
import Footer from "./components/layout/footer";

import Contact from "./components/pages/ContactUs";
import About from "./components/pages/AboutUs";
import What from "./components/pages/WhatWeDo";
import OurWork from "./components/pages/OurWork";
import Blog from "./components/pages/Blog";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/legalStuff" component={legalStuff} />
        <Route exact path="/ContactUs" component={Contact} />
        <Route exact path="/AboutUs" component={About} />
        <Route exact path="/WhatWeDo" component={What} />
        <Route exact path="/OurWork" component={OurWork} />
        <Route exact path="/Blog" component={Blog} />

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
