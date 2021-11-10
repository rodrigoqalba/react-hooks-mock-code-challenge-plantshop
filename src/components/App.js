import {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plantList, setPlantList] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
        .then((response) => response.json())
        .then((data) => {
	      setPlantList(data);
        });	
}, []);

const handleAddPlant = (plant) => {
    setPlantList([plant, ...plantList])
}

  return (
    <div className="app">
      <Header />
      <PlantPage plantListArray={plantList} handleAddPlant={handleAddPlant}/>
    </div>
  );
}

export default App;
