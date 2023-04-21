//PLAN
//import react
//create function that will return JSX for a search bar 
//  have placeholder text that says "I want to check the weather in..."
//  have a button to submit the search 
//export as default 
// add the return to the App function 


import React from 'react';

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="I want to check the weather in..." />
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchBar;
