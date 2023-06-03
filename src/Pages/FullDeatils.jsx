import axios from "axios";
import { useEffect, useState } from "react";
import { MdMovie } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router-dom";

const FullDeatils = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { movieID } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.omdbapi.com/?apikey=bb1151cd&i=${movieID}`)
      .then((res) => {
        setLoading(false);
        setData(res?.data);
      });
  }, [movieID]);

  return (
    <section className="min-h-[calc(100vh_-_(76px_+_68px))] relative">
      {loading ? (
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
      ) : (
        <div className="container max-w-[1300px] mx-auto grid grid-cols-1  md:grid-cols-2 gap-6 h-full min-h-[calc(100vh_-_(76px_+_68px))] py-8 px-4">
          <div className="img self-center h-[600px] relative overflow-hidden rounded-md">
            <img
              src={data.Poster}
              alt={data.Title}
              className="w-full h-full object-cover object-center"
            />
            <div className="flex flex-row items-center gap-2 font-bold absolute top-4 left-2 md:left-4 bg-yellow-400 text-slate-800 text-base py-2 px-6 rounded-full">
              <AiFillStar />
              <h4>{data.imdbRating}</h4>
            </div>
          </div>
          <div className="info">
            <div className="flex flex-col gap-4">
              <div>
                <div className="name font-bold text-4xl flex flex-wrap flex-row items-start  gap-4 capitalize">
                  <MdMovie className="mt-2" />
                  <h1 className="max-w-[480px]">{data.Title}</h1>
                </div>
                <p className="text-sm font-secondary font-semibold mt-4 mb-4">
                  {data.Plot}
                </p>
              </div>
              <div className="flex flex-row gap-2 flex-wrap font-secondary uppercase">
                <div className="tag p-2 px-6 rounded-full bg-primary text-sm font-semibold max-w-fit inline-block  flex-shrink-0">
                  {data.Genre}
                </div>
                <div className="tag p-2 px-6 rounded-full bg-primary text-sm font-semibold max-w-fit inline-block  flex-shrink-0">
                  {data.Year}
                </div>
                <div className="tag p-2 px-6 rounded-full bg-primary text-sm font-semibold max-w-fit inline-block  flex-shrink-0">
                  {data.Type}
                </div>
              </div>
            </div>
            <ul className="py-4 flex flex-col gap-4">
              <li className="flex justify-between gap-4">
                <p className="font-medium font-secondary">Released</p>
                <h4 className="font-primary font-bold text-xl text-right">
                  {data.Released}
                </h4>
              </li>
              <li className="flex justify-between gap-4">
                <p className="font-medium font-secondary">Runtime</p>
                <h4 className="font-primary font-bold text-xl text-right">
                  {data.Runtime}
                </h4>
              </li>
              <li className="flex justify-between gap-4">
                <p className="font-medium font-secondary">Language</p>
                <h4 className="font-primary font-bold text-xl text-right">
                  {data.Language}
                </h4>
              </li>
              <li className="flex justify-between gap-4">
                <p className="font-medium font-secondary whitespace-nowrap">
                  Director Name
                </p>
                <h4 className="font-primary font-bold text-xl text-right">
                  {data.Director}
                </h4>
              </li>
              <li className="flex justify-between gap-4">
                <p className="font-medium font-secondary whitespace-nowrap">
                  Writer Name
                </p>
                <h4 className="font-primary font-bold text-xl text-right">
                  {data.Writer}
                </h4>
              </li>
              <li className="flex justify-between gap-4">
                <p className="font-medium font-secondary whitespace-nowrap">
                  Actors Names
                </p>
                <h4 className="font-primary font-bold text-xl  text-right">
                  {data.Actors}
                </h4>
              </li>
              <li className="flex justify-between gap-4">
                <p className="font-medium font-secondary whitespace-nowrap">
                  Awards
                </p>
                <h4 className="font-primary font-bold text-xl  text-right">
                  {data.Awards}
                </h4>
              </li>
              <li className="flex justify-between gap-4">
                <p className="font-medium font-secondary whitespace-nowrap">
                  Metascore
                </p>
                <h4 className="font-primary font-bold text-xl  text-right">
                  {data.Metascore}
                </h4>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default FullDeatils;
