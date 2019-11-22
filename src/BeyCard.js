import React from "react";

const BeyCard = (props) => {
   
  const { name, img } = props.bey
  
  // const name = props.bey.name 
  // const img = props.bey.img
  
  let clickHandler = bey => {
    props.clickHandler(props.bey)
  }
  
  return (
    <div className='bey-card'>
      <h2>{ name }</h2>
      <img
        src={ img }
        alt={ name }
        onClick={ clickHandler}
      />
    </div>
  );
};

export default BeyCard;