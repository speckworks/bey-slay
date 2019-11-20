import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'

const App = () => {
  return (
    <div className="container">
      <BeyContainer />
      <Favorites />
    </div>
  );
};

export default App;
