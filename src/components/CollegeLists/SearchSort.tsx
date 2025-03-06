"use client";

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchSort = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Most Popular");

  return (
    <div className="short-by-wrapper d-md-flex align-items-center">
      {/* Search Input */}
      <div className="search-blog search p-0">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
       <IoSearchOutline />
      </div>

      {/* Sort Dropdown */}
      <div className="sort d-flex align-items-center">
        <label>Sort by:</label>
        <select
          className="form-select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="Most Popular">Most Popular</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default SearchSort;
