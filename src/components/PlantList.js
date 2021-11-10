import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantListArray}) {
  return (
    <ul className="cards">
      {plantListArray.map(plant => <PlantCard key={plant.id} plantObj={plant}/>)}
    </ul>
  );
}

export default PlantList;
