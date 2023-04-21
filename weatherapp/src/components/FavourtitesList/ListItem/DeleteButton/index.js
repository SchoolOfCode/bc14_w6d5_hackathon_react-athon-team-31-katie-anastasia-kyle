// This component will return the delete button
// The deleteFromFavourites function from the App.js file will be called when the user clicks the delete button
// The index of the item in the favourites state will be passed as props to the DeleteButton component
// So that the DeleteButton component will know which item to delete from the favourites state
// When the user clicks the delete button the deleteFromFavourites function will be called to remove the item next to that delete button from the favourites state
// The favourites state will be updated to the favourites state without the item that the user wants to delete

function DeleteButton({ id, deleteFromFavourites }) {
    return (
      <button className="delete-button"
        onClick={() => {
          deleteFromFavourites(id);
        }}
      >
        Delete
      </button>
    );
  }

export default DeleteButton;