import React from "react";

const Search = ({ Search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search Items</label>
      <input
        type="text"
        id="search"
        placeholder="Search Items"
        role="searchBox"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
