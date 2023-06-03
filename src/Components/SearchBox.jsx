import axios from "axios";
import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ setDataModal }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const key = useSelector((state) => state.input.keyword);

  let navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.omdbapi.com/?apikey=bb1151cd&s=${key.trim()}`)
      .then((res) => {
        setLoading(false);
        setData(res?.data);
        console.log(res.data.Search);
      });
  }, [key]);
  return (
    <div className="mt-2 rounded-md overflow-hidden absolute w-full max-w-600px shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] z-[99]">
      <div className="container flex flex-col gap-2 p-4 bg-neutral-50 text-slate-800 overflow-y-auto h-[400px] max-w-[600px] relative">
        {loading || data?.length === 0 ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
            <Oval
              height={50}
              width={50}
              color="#E62725"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#E62725"
              strokeWidth={4}
              strokeWidthSecondary={4}
            />
          </div>
        ) : data.Response !== "False" ? (
          data?.Search.map((elem, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-80 transition-all ease-in-out duration-500"
              onClick={() => {
                navigate(`/details/${elem.imdbID}`);
                setDataModal(false);
              }}
            >
              <div className="img w-[50px] h-[80px] overflow-hidden">
                <img
                  src={elem.Poster}
                  alt={elem.Title}
                  className="object-cover"
                />
              </div>
              <div className="font-semibold text-base break-words whitespace-normal">
                <h1>{elem.Title}</h1>
              </div>
            </div>
          ))
        ) : (
          <h1 className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
            {data.Error}
          </h1>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
