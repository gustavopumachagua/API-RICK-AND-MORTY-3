import React from "react";

const SearchBar = ({ filterCharacters }) => {
  return (
    <div className="flex justify-center py-4 ">
      <input
        className="rounded-lg px-1 py-1"
        onChange={filterCharacters}
        type="text"
        placeholder="Search character on page"
      />
    </div>
  );
};

export { SearchBar };
