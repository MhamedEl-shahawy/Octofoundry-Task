import React from "react";

type SearchBarTypes = {
  searchItems: (key: string) => void;
};
export default function SearchBar(props: SearchBarTypes) {
  const { searchItems } = props;
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          onChange={(e) => searchItems(e.target.value)}
        />
        <button type="submit" className="searchButton" title="search">
          Go
        </button>
      </div>
    </div>
  );
}
