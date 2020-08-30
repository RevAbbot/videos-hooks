import React, { useState } from "react";

const SearchBar = ({ handleSearchSubmit }) => {
  const [inputString, setinputString] = useState("");

  //    Event handlers
  //    Use the arrow function (=>) format to ensure binding of 'this'
  const handleInputChange = (e) => {
    setinputString(e.target.value);
  };

  //  Event handler for form.
  //  Inhibit form submit/refresh when <enter> pressed
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //    console.log("handleFormSubmit: " + inputString);
    handleSearchSubmit(inputString);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="field">
          <label>Video the Search</label>
          <input // Controlled input element (value passes through state)
            type="text"
            value={inputString}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
