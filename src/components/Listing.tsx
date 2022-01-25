import React from 'react';
import { stayType } from './Results';

const superHostTag = (
  <span className="uppercase border rounded-2xl py-1 px-2 text-xs">
    Super Host
  </span>
);

const starIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ color: '#EB5757E5' }}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
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
      <img className="rounded-3xl h-64 lg:h-72" src={photo} alt={`${title}`} />
      <div className="flex flex-col">
        <div className="w-full p-2 flex justify-between text-sm">
          {superHost && superHostTag}
          <div className="flex gap-2 text-gray-600">
            <span>{type}</span>
            <span>{maxGuests && `${maxGuests} max`}</span>
            <span>{beds} beds</span>
          </div>
          <div className=" flex gap-1">
            {starIcon}
            {rating}
          </div>
        </div>
        <div className="w-full p-2 text-strong">{title}</div>
      </div>
    </div>
  );
}

export default Listing;
