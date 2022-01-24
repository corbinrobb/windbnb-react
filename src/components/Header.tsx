import React from 'react';
import Search from './Search';
import logo from '../resources/logo.png';
import { filtersType } from '../App';

type HeaderProps = {
  filters: filtersType;
  updateFilters: (arg0: filtersType) => void;
};

function Header({ filters, updateFilters }: HeaderProps) {
  return (
    <div className="p-4 flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-1/5">
        <img src={logo} alt="Windbnb logo" />
      </div>
      <Search filters={filters} updateFilters={updateFilters} />
    </div>
  );
}

export default Header;
