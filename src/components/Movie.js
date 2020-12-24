import React from 'react';
import templateImg from './templateImg.png';

const Movie = (props) => {
  return (
    <div className="flex p-5 ">
      <img className="w-24" src={templateImg} />
      <div className="flex flex-col justify-between w-full pl-2.5">
        <h3>
          <span className="font-bold">Moonlight</span> (2016)
        </h3>
        <p className="text-sm truncate-3-lines -mt-2 text-gray-400">
          A young African-American man grapples with his identity and sexuality
          while experiencing the everyday struggles of childhood, adolescence,
          and burgeoning adulthood.
        </p>
        <button className="flex justify-center items-center rounded px-2.5 py-1 w-28 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          <span className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          Nominate
        </button>
      </div>
      {/* <div className="w-full y-full ml-2.5">
                <h3>
                  <span className="font-bold">Moonlight</span> (2016)
                </h3>
                <p className="hidden sm:block h-2/3 text-gray-400 overflow-hidden">
                  A young African-American man grapples with his identity and
                  sexuality while experiencing the everyday struggles of
                  childhood, adolescence, and burgeoning adulthood.
                </p>
              </div> */}
    </div>
  );
};

export default Movie;
