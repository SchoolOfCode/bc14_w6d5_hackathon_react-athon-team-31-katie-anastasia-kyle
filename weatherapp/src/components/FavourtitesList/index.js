// This is where the favourites are added to the favourites list
// This component is imported into the App.js file
// This component will take the favourites state and the addToFavourites function as props from the App.js file
// The addToFavourites function will be called when the user clicks the add to favourites button
// The favourites state will be passed as props to the ListItem component
// So that the ListItem component will know which items to display in the favourites list
// This component will return the favourites list and the delete button


import ListItem from "./ListItem/index.js";

function FavouritesList({ favourites, deleteFromFavourites, addToFavourites }) {
    return (
        <div className="favourites-list">
            <h2>Favourite Places</h2>
            <ul>
            <ListItem 
                key = {favourites.id}
                favourites = {favourites} 
                addToFavourites = {addToFavourites}
                deleteFromFavourites={deleteFromFavourites} />
            </ul>
        </div>
    );
}

export default FavouritesList;