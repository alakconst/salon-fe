// Salons.tsx
'use client'
import React, { useState } from 'react';
import salonsData from '@/app/constants/salonData'; 
interface Salon {
  id: number;
  name: string;
  address: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const Salons = () => {
const [sortedData, setSortedData] = useState<Salon[]>(salonsData);
  const sortData = (sortBy:string) => {
    let sortedArray = [...salonsData];

    if (sortBy === 'ratingHighToLow') {
      sortedArray.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'ratingLowToHigh') {
      sortedArray.sort((a, b) => a.rating - b.rating);
    } else if (sortBy === 'priceHighToLow') {
      sortedArray.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'priceLowToHigh') {
      sortedArray.sort((a, b) => a.price - b.price);
    }

    setSortedData(sortedArray);
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => sortData('ratingHighToLow')}
          className="flex-grow text-left bg-neutral-300 hover:bg-neutral-400 text-neutral-700 px-4 py-2 rounded"
        >
          Highest to Lowest Rating
        </button>
        <button
          onClick={() => sortData('ratingLowToHigh')}
      className="flex-grow text-left bg-neutral-300 hover:bg-neutral-400 text-neutral-700 px-4 py-2 rounded"
        >
          Lowest to Highest Rating
        </button>
        <button
          onClick={() => sortData('priceHighToLow')}
          className="flex-grow text-left bg-neutral-300 hover:bg-neutral-400 text-neutral-700 px-4 py-2 rounded"
        >
          High to Low Price
        </button>
        <button
          onClick={() => sortData('priceLowToHigh')}
      className="flex-grow text-left bg-neutral-300 hover:bg-neutral-400 text-neutral-700 px-4 py-2 rounded"
        >
          Low to High Price
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedData.map((salon) => (
          <div key={salon.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={salon.imageUrl}
              alt="Salon"
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h2 className="text-lg font-semibold mb-1">{salon.name}</h2>
            <p className="text-neutral-600 mb-2">{salon.address}</p>
            <p className="text-neutral-700 font-semibold">${salon.price}</p>
            <p className="text-neutral-700">Rating: {salon.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salons;