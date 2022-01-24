import React from 'react';
import Listing from './Listing';

function Results() {
  return (
    <div className="border p-10 flex justify-evenly">
      Results
      <Listing />
      <Listing />
      <Listing />
    </div>
  );
}

export default Results;
