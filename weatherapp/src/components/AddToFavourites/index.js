//PLAN
//import react
//create function to return a button that adds to favourites
//call this "Add to My Locations List!"
//create an event handler that listens for when the button is clicked to add the item to the favourites list
//at the moment have this console.log that it has been added so can see that the button is working before using hooks
// hook the button to the display component so that it adds the city name to the favourites list when the button is clicked

//PLAN for making state
//

import React from "react";

//const [favouritesList, SetFavouritesList] = useState([]);

function AddToFavourites({addToFavourites}) {
  //function handleAddToFavorites() {
  //   console.log("Item added to favorites!");
  //   props.SetFavouritesList([...props.favouritesList, props.newFavouriteItem]);
  // }
  return (
    <button className="add-button" onClick={addToFavourites}>
      Add to My Locations List!
    </button>
  );
}

export default AddToFavourites;
