import React from 'react';
import { MdStarHalf, MdStarOutline, MdStar } from 'react-icons/md';

const StarRating = ({ stars }) => {
  return (
    <div className="flex text-yellow-500">
      {stars >= 1 ? <MdStar /> : <MdStarOutline />}
      {stars >= 2 ? (
        <MdStar />
      ) : stars >= 1.5 ? (
        <MdStarHalf />
      ) : (
        <MdStarOutline />
      )}
      {stars >= 3 ? (
        <MdStar />
      ) : stars >= 2.5 ? (
        <MdStarHalf />
      ) : (
        <MdStarOutline />
      )}
      {stars >= 4 ? (
        <MdStar />
      ) : stars >= 3.5 ? (
        <MdStarHalf />
      ) : (
        <MdStarOutline />
      )}
      {stars >= 5 ? (
        <MdStar />
      ) : stars >= 4.5 ? (
        <MdStarHalf />
      ) : (
        <MdStarOutline />
      )}
    </div>
  );
};

export default StarRating;
