import React from 'react';
import { filtersType } from '../App';

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
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

function Search({ filters }: SearchProps) {
  return (
    <div className="border rounded-xl flex mt-8 w-4/5 divide-x text-sm">
      <div className="py-4 w-2/5 text-center">{filters.location}</div>
      <input className="py-4 w-2/5 text-center" placeholder="Add Guests" />
      <button className="py-4 px-2 w-1/5 flex justify-center items-center">
        {searchIcon}
      </button>
    </div>
  );
}

export default Search;
