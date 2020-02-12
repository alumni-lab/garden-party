import React from "react";
import "./Plant.css"
// Plant component takes in size and type of plant as props and will show the plant.
// This will eventually be used in a garden component that shows all of the plants. 
// For now use emoji's for the plant image.
// The component should take up a static amount of space say (ex. 100px by 100px) 
// and as the plant grows it will overflow out of that space.

// key={plant.id}
// location={plant.location}
// type={plant.type}
// size={plant.size}
export default function Plant(props) {

  return (
    <div className="plant">
      <span className="emoji" style={{ fontSize: `${props.size}rem`}}>{props.type}</span>
    </div>
  );
}