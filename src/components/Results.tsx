import React from 'react';
import { filtersType } from '../App';
import Listing from './Listing';
import stays from '../resources/stays.json';

export type stayType = {
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number | null;
  photo: string;
};

type ResultsProps = {
  filters: filtersType;
};

function Results({ filters }: ResultsProps) {
  return (
    <main className="p-3 flex flex-col justify-evenly gap-8">
      <div className="flex justify-between">
        <div className="text-xl text-strong">
          Stays in {filters.location.country}
        </div>
        <div className="text-lg text-gray-500">
          {stays.length >= 12 ? '12+' : stays.length} stays
        </div>
      </div>
      {stays.map((stay: stayType) => {
        return <Listing {...stay} />;
      })}
    </main>
  );
}

export default Results;
