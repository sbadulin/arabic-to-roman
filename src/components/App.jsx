import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Converter } from "./Converter";

export const App = () => (
  // using router to get/set query params
  <Router>
    <Route component={Converter} />
  </Router>
);
