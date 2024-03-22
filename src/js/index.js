//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "/workspaces/walter10x-Landing-Page-con-React/src/js/navbar"
import Jumbotron from "/workspaces/walter10x-Landing-Page-con-React/src/js/jumbotron.jsx"
import Card from "/workspaces/walter10x-Landing-Page-con-React/src/js/card.jsx"

//render your react application
ReactDOM.render(
    <>
      <Navbar />
      <Jumbotron />
      <Home />
      <Card />
    </>,
    document.querySelector("#app")
  );


