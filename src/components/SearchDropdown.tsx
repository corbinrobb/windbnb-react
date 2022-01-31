import React, { useState } from 'react';
import { filtersType } from '../App';

type SearchDropdownProps = {
  toggleDropdown: () => void;
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

const closeIcon = (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const SearchDropdown = ({
  toggleDropdown,
  filters,
  updateFilters,
}: SearchDropdownProps) => {
  const [input, setInput] = useState(filters);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="flex flex-col p-6 bg-white justify-between z-50 h-4/5">
        <div
          onClick={toggleDropdown}
          className="p-6 pb-10 absolute top-0 right-0"
        >
          {closeIcon}
        </div>
        <div>
          <span className="self-start p-4">Edit your search</span>
          <div className="flex flex-col mt-6 items-center border rounded-2xl divide-y">
            <label className="p-2 flex flex-col w-full uppercase text-sm">
              Location
              <input
                className="p-2"
                value={`${input.location.city}`}
                onChange={(e) =>
                  setInput((prev) => ({
                    ...prev,
                    location: { ...prev.location, city: e.target.value },
                  }))
                }
              />
            </label>
            <label className="p-2 flex flex-col w-full uppercase text-sm">
              Guests
              <input
                className="p-2"
                placeholder="Add guests"
                onChange={(e) =>
                  setInput((prev) => ({
                    ...prev,
                    guests: Number(e.target.value) || 0,
                  }))
                }
              />
            </label>
          </div>
        </div>

        <button
          className="p-3 px-8 border rounded-2xl self-center flex gap-2 text-white"
          onClick={() => updateFilters(input)}
          style={{ backgroundColor: '#EB5757E5' }}
        >
          {searchIcon}
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchDropdown;
