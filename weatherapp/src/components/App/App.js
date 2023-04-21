import React, { useState } from "react";
import WeatherDisplay from "../Display";
import './App.css';
import FavouritesList from '../FavourtitesList';
import SearchBar from "../SearchBar/index.js";
import AddToFavourites from "../AddToFavourites/index.js";


function App() {

  const [favourites, setFavourites] = useState([]); // The favourites state will be passed as props to the ListItem component so that the ListItem component will know which items to display in the favourites list

  function deleteFromFavourites(id) { // This function will be called when the user clicks the delete button
    // const newFavourites = favourites.filter((favourite) => favourite.id !== id); // This filters the favourites state and when the id of the item in the favourites state is not equal to the id of the item that the user wants to delete then the item will be added to the newFavourites state
    // setFavourites(newFavourites); // The favourites state will be updated to the newFavourites state
    setFavourites([...favourites.slice(0, id), ...favourites.slice(id + 1)]); // This will remove the item from the favourites state that the user wants to delete and update the favourites state
  }


  return (
    <div className="App">
      <SearchBar />
      <WeatherDisplay />
      <div>
        <AddToFavourites />
      </div>
      <FavouritesList favourites={favourites} deleteFromFavourites={deleteFromFavourites} />
    </div>
  );
}

export default App;
