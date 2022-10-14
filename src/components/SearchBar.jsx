import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ filterCharacters }) => {
  return (
    <div className="py-6  flex justify-center bg-bodyLight dark:bg-bodyDark">
      <input
        className="bg-cardLight dark:bg-cardDark outline-none rounded-l-lg  sm:px-8 lg:px-36 py-3 text-primary dark:text-secondary"
        type="text"
        placeholder="Search a character"
        onChange={filterCharacters}
      />
      <button className="bg-cardLight dark:bg-cardDark px-2 rounded-r-lg">
        <FaSearch className="text-primary dark:text-secondary" />
      </button>
    </div>
  );
};

export { SearchBar };
