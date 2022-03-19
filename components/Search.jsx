import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";

import Movie from "./Movie";

function Search({ data }) {
  const [filteredData, setFilteredData] = useState(data);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (movie) => {
    const searchWord = movie.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.Title.toLowerCase().includes(searchWord.toLowerCase());
    });

    searchWord === "" && filteredData === null
      ? setFilteredData(...movie)
      : setFilteredData(newFilter);
  };

  const clearInput = () => {
    setFilteredData(data);
    setWordEntered("");
  };

  return (
    <>
      <div className="grid max-w-screen-xl sm:px-[77px] py-[53px] px-[28px] sm:py-[60px] mx-auto">
        <p className="py-4">Search</p>
        <label className="h-12 flex  rounded-lg px-4 items-center border">
          <input
            type="text"
            name="text"
            placeholder="Search by Movie Name"
            className="flex-1  bg-white outline-none w-full  border-gray-300 focus:shadow-outline"
            onChange={handleFilter}
            value={wordEntered}
          />
          {wordEntered === "" ? (
            <FiSearch className="text-wine-600 text-3xl ml-2" />
          ) : (
            <ImCancelCircle
              onClick={clearInput}
              className="text-wine-600 text-3xl ml-2"
            />
          )}
        </label>
      </div>
      <Movie data={filteredData} />
    </>
  );
}

export default Search;
