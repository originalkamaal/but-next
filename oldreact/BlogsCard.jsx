import React from 'react';
import { MdDateRange } from 'react-icons/md';
import StarRating from './StarRating';

const BlogsCard = ({ data }) => {
  return (
    <div className="relative m-1 lg:m-2 pb-[40px] rounded-md flex-col justify-between">
      <div>
        <img
          className="rounded-md shadow-lg w-full"
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="bg-emerald-100 w-min block px-2 py-1 mt-4 rounded-md text-xs text-gray-500">
        Title
      </div>
      <div className="pt-2 font-bold text-xl lg:text-2xl">
        Sample Titile for an Article.
      </div>
      <div className="flex text-xs space-x-2 text-gray-500 items-center w-full">
        <div className="flex items-center space-x-1">
          <div className="w-4">
            <img
              className="rounded-full"
              src="https://pbs.twimg.com/profile_images/1267713887165485061/WUR4QXtd_400x400.jpg"
              alt=""
            />
          </div>
          <div>Imran Khan</div>
        </div>

        <div className="text-gray-300 h-full">|</div>

        <div className="flex items-center space-x-1">
          <div>
            <MdDateRange />
          </div>
          <div>22 November 2022</div>
        </div>
        <div className="text-gray-300 h-full">|</div>

        <div>
          <StarRating stars={4.5} />
        </div>
      </div>
      <div className="text-sm mt-2 lg:text-md text-gray-500 h-10 line-clamp-2">
        Did you come here for something in particular or just general
        Riker-bashing.Did you come here for something in particular or just
        general Riker-bashing.
      </div>
    </div>
  );
};

export default BlogsCard;
