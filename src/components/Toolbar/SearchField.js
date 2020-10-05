import React, { useState, useEffect } from "react";

const SearchBox = (props) => {
  const [term, setTerm] = useState("");

  var onInputChange = (event) => {
    setTerm(event.target.value);
    //props.onSearchTermChange(event.target.value);
    
  };

  useEffect(() => {
    console.log(term);
  }, [term]);

  return (
    <div className="search-bar">
      <input
        onKeyPress={(event) => {
          if (event.key === "Enter") {           
              onInputChange(event);
          }
        }}
      />
    </div>
  );
};

export default SearchBox;
