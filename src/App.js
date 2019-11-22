
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"


class App extends Component {

  state = {
    beys: []
  }

  componentDidMount(){
    fetch("http://localhost:4000/beys")
    .then(res => res.json())
    .then(beys => this.setState({ beys }))
  }


render(){
return (
  <div className="main-container">
    <BeyContainer beys={this.state.beys}/>
    <Favorites />
  </div>
  );
};
}

export default App;
