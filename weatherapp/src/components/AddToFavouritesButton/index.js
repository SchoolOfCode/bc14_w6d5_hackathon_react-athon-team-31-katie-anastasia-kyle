//PLAN
//import react
//create function to return a button that adds to favourites
//call this "Add to My Locations List!"
//create an event handler that listens for when the button is clicked to add the item to the favourites list
//at the moment have this console.log that it has been added so can see that the button is working before using hooks

import React from "react";

function AddToFavouritesButton() {
  function handleAddToFavorites() {
    console.log("Item added to favorites!");
  }

  return <button onClick={handleAddToFavorites}>Add to My Locations List!</button>;
}
