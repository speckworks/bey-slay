import React from "react";
import BeyCard from "./BeyCard"

export default class BeyContainer extends React.Component {
  
  arrayDeBey = () => {
    return this.props.beys.map(bey => (
      <BeyCard
      bey={ bey }
      key={ bey.id}
      clickHandler= { this.props.clickHandler }
      />
    )
    ) 
  }  

  
  render() {
    console.log(this.props)
    return (
      <div className="bey-container">
        <h1>BEYDEX</h1>
        {this.arrayDeBey()}
      </div>
    );
  }
}
