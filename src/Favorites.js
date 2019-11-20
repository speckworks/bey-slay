import React, { Component } from "react";
import BeyCard from './BeyCard'

export default class Favorites extends Component {

  renderFavs = () => {
    return this.props.beys.map(beyObj => (
      <BeyCard
        bey={ beyObj }
        key={ beyObj.id }
        clickHandler={ this.props.clickHandler }
      />
    ))
  }

  render() {
    console.log(this.props);
    return (
      <div className="favorites">
        <h1>BEYVORITES</h1>
        { this.renderFavs() }
      </div>
    );
  }
}
