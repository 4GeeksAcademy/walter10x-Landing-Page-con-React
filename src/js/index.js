//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "/workspaces/walter10x-Landing-Page-con-React/src/js/component/home.jsx"

//import your own components


//render your react application
ReactDOM.render(<Home />,document.querySelector("#app")
  );


