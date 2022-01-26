import React, { useState } from 'react';
import { filtersType } from '../App';
import SearchDropdown from './SearchDropdown';

type SearchProps = {
  filters: filtersType;
  updateFilters: (arg0: filtersType) => void;
};

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{ color: '#EB5757E5' }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

function Search({ filters, updateFilters }: SearchProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <>
      <div
        onClick={toggleDropdown}
        className="border border-gray-100 rounded-xl flex my-8 lg:my-0 w-4/5 lg:w-1/3 divide-x divide-gray-100 text-sm shadow"
      >
        <input
          value={`${filters.location.city}, ${filters.location.country}`}
          readOnly
          className="py-4 w-2/5 text-center"
        ></input>
        <input
          className="py-4 lg:py-2 w-2/5 text-center"
          readOnly
          placeholder="Add Guests"
        />
        <button className="py-4 lg:py-2 px-2 w-1/5 flex justify-center items-center">
          {searchIcon}
        </button>
      </div>
      {showDropdown && (
        <SearchDropdown
          toggleDropdown={toggleDropdown}
          filters={filters}
          updateFilters={updateFilters}
        />
      )}
    </>
  );
}

export default Search;
