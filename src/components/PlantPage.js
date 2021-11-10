import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantListArray, handleAddPlant}) {

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant}/>
      <Search />
      <PlantList plantListArray={plantListArray}/>
    </main>
  );
}

export default PlantPage;
