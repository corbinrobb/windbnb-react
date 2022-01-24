import React from 'react';
import { filtersType } from '../App';
import Listing from './Listing';

type ResultsProps = {
  filters: filtersType;
};

function Results({ filters }: ResultsProps) {
  return (
    <div className="border p-10 flex flex-col justify-evenly">
      {filters.location}
      <Listing />
      <Listing />
      <Listing />
    </div>
  );
}

export default Results;
