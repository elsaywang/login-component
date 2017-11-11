import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import {render} from "react-dom";
import App from "./components/App/App";
import "../styles/index.scss";

document.addEventListener("DOMContentLoaded", () => {
	render(<App/>, document.querySelector("#app"));
});
