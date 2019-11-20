import React, { Component } from "react";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'

class App extends Component {
  state = {
    beys: []
  }

  componentDidMount(){
    fetch("http://localhost:4000/beys")
    .then(r => r.json())
    .then(beys => this.setState({ beys }))
  }

  clickHandler = bey => {
    let updateBeys = [...this.state.beys]
    let foundBey = this.state.beys.find(beyObj => beyObj.id === bey.id)
    foundBey.favorite = !foundBey.favorite
    this.setState({ beys: updateBeys })
  }

  favBeys = () => {
    return this.state.beys.filter(beyObj => beyObj.favorite)
  }

  render(){
  return (
    <div className="main-container">
      <BeyContainer beys={ this.state.beys } clickHandler={ this.clickHandler }/>
      <Favorites beys={ this.favBeys() } clickHandler={ this.clickHandler }/>
    </div>
  )}
};

export default App;
