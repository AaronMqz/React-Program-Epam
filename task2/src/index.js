import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Home from "./components/Home";

const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(<Home />);
