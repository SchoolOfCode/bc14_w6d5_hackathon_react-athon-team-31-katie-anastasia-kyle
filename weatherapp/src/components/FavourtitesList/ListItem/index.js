// This component will be one of the items in the favourites list
// It will display the favourite city and the delete button
// The delete button will be imported from the DeleteButton component
// The delete button will be passed the index and the deleteFromFavourites function as props
// So that the delete button will know which item to delete from the favourites state

import DeleteButton from "./DeleteButton/index.js";

function ListItem({ favourites, deleteFromFavourites }) {
  return (
    <div className="list-item">
      <ul>
        {favourites.map((item, id) => {
          return (
            <li key={id}>
              {item}
              <DeleteButton id={id} deleteFromFavourites={deleteFromFavourites} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListItem;