import React, { useState } from "react";
import WeatherDisplay from "../Display";
import "./App.css";
import FavouritesList from "../FavourtitesList";
import SearchBar from "../SearchBar/index.js";
import AddToFavourites from "../AddToFavourites/index.js";

function App() {
  const [favourites, setFavourites] = useState([]); // The favourites state will be passed as props to the ListItem component so that the ListItem component will know which items to display in the favourites list

  const [cityName, setCityName] = useState("");

  function handleInput(event) { // This function will be passed as props to the SearchBar component so that the SearchBar component will know what to do when the user types in the search bar
    const cityName = event.target.value; // The cityName state is updated by setting it to the value of the search bar
    setCityName(cityName); // The cityName state is updated by setting it to the value of the cityName state
  }

  function handleSearch(event) { // This function will be passed as props to the SearchBar component so that the SearchBar component will know what to do when the user clicks the search button
    // event.preventDefault(); // This prevents the page from refreshing when the user clicks the search button
    handleSearch();
    setCityName(""); // The cityName state is updated by setting it to an empty string so that the search bar is cleared
  }

  function addToFavourites(favourite) { // This function will be passed as props to the AddToFavourites component so that the AddToFavourites component will know what to do when the user clicks the add to favourites button
    setFavourites([...favourites, favourite]); // The Favourites state is updated by adding the new favourite to the existing favourites
  }

  function deleteFromFavourites(id) { // This function will be passed as props to the FavouritesList component so that the FavouritesList component will know what to do when the user clicks the delete button
    const index = favourites.findIndex((favourite) => favourite.id === id); // The index of the favourite to be deleted is found
    const newFavourites = [...favourites]; // A copy of the favourites state is created
    newFavourites.splice(index, 1);   // The favourite to be deleted is removed from the copy of the favourites state
    setFavourites(newFavourites); // The favourites state is updated by setting it to the copy of the favourites state with the favourite removed
  }

  return (
    <div className="App">
      <SearchBar handleInput={handleInput} handleSearch={handleSearch} /> 
      <WeatherDisplay city_name={cityName} />
      <AddToFavourites addToFavourites={addToFavourites} />
      <FavouritesList
        favourites={favourites}
        deleteFromFavourites={deleteFromFavourites}
      />
    </div>
  );
}

export default App;
