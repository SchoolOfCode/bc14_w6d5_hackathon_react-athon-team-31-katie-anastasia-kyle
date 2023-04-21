import React, { useState } from "react";
import WeatherDisplay from "../Display";
import "./App.css";
import FavouritesList from "../FavourtitesList";
import SearchBar from "../SearchBar/index.js";
import AddToFavourites from "../AddToFavourites/index.js";

function App() {
  const [favourites, setFavourites] = useState([]); // The favourites state will be passed as props to the ListItem component so that the ListItem component will know which items to display in the favourites list
  
  const [cityName, setCityName] = useState("");

  function handleInput(event) {
      setCityName(event.target.value);
  }

  function addToFavourites(favourite) {
    setFavourites([...favourites, favourite]);
  }

  function deleteFromFavourites(id) {
    const index = favourites.findIndex((favourite) => favourite.id === id);
    const newFavourites = [...favourites];
    newFavourites.splice(index, 1);
    setFavourites(newFavourites);
  }

  return (
    <div className="App">
      <SearchBar handleInput={handleInput} value={cityName} />
      <WeatherDisplay cityName={cityName} />
      <AddToFavourites addToFavourites={addToFavourites} />
      <FavouritesList
        favourites={favourites}
        deleteFromFavourites={deleteFromFavourites}
      />
    </div>
  );
}

export default App;
