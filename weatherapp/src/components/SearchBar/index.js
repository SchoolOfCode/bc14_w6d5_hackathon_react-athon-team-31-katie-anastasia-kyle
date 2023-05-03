//PLAN
//import react
//create function that will return JSX for a search bar
//  have placeholder text that says "I want to check the weather in..."
//  have a button to submit the search
//export as default
// add the return to the App function
// get the button to display the weather for the city that is typed in the search bar
// pass the getWeather function as props to the SearchBar component

import React from "react";

function SearchBar({ handleInput, handleSearch, value }) {
  return (
    <div>
      <input
        type="text"
        placeholder="I want to check the weather for..."
        onChange={handleInput}
        value={value}
      />
      <button type="submit" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
