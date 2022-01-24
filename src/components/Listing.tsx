import React from 'react';
import { stayType } from './Results';

const superHostTag = (
  <span className="uppercase border rounded-2xl py-1 px-2 text-xs">
    Super Host
  </span>
);

function Listing({
  superHost,
  title,
  rating,
  maxGuests,
  type,
  beds,
  photo,
}: stayType) {
  return (
    <div className="flex flex-col">
      <img className="rounded-3xl h-64" src={photo} alt={`${title}`} />
      <div className="flex flex-col">
        <div className="w-full p-2 flex justify-between text-sm">
          {superHost && superHostTag}
          <div className="flex gap-2 text-gray-600">
            <span>{type}</span>
            <span>{maxGuests && `${maxGuests} max`}</span>
            <span>{beds} beds</span>
          </div>
          {rating}
        </div>
        <div className="w-full p-2 text-strong">{title}</div>
      </div>
    </div>
  );
}

export default Listing;
