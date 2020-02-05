import React from "react";
import Plant from "./Plant";
import "./Garden.css"

const plants = [
  {
    id: "plant1",
    location: 0,
    type: "🌱",
    size: 3
  },
  {
    id: "plant1",
    location: 1,
    type: "🥀",
    size: 7
  },
  {
    id: "plant1",
    location: 2,
    type: "🌵",
    size: 10
  },
  {
    id: "plant1",
    location: 4,
    type: "🌺",
    size: 7
  },
  {
    id: "plant1",
    location: 5,
    // type: "🍱",
    type: "🌻",
    size: 10
  },
  {
    id: "plant1",
    location: 5,
    // type: "🍱",
    // type: "🌻",
    size: 10
  },
  {
    id: "plant1",
    location: 8,
    type: "🌲",
    size: 8
  }
];

export default function Garden(props) {
  const gardenPlants = plants.map(plant => {
    return (
      <Plant
        key={plant.id}
        location={plant.location}
        type={plant.type}
        size={plant.size}
      />
    );
  });
  return <div className="garden">{gardenPlants}</div>;
}
