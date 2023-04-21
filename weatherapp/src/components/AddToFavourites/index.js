//PLAN
//import react
//create function to return a button that adds to favourites
//call this "Add to My Locations List!"
//create an event handler that listens for when the button is clicked to add the item to the favourites list
//at the moment have this console.log that it has been added so can see that the button is working before using hooks

//PLAN for making state 
//

import React from "react";
import {useState} from "react";
const [favouritesList, SetFavouritesList] = useState ([])

function AddToFavourites(newFavouriteItem) {
 
  function handleAddToFavorites() {
    console.log("Item added to favorites!");
  }

  return <button onClick={handleAddToFavorites}>Add to My Locations List!</button>;
}