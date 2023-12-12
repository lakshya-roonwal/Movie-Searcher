import { useEffect, useState } from "react";
import Accordian from "./Accordian";
import { MdDateRange } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { BiTime } from "react-icons/bi";

export default function SingleMovie() {
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    console.log("hello World");
    const id = window.location.href.split(":").pop();
    console.log(id);
    const responce = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=6af4e10d&`
    );
    const data = await responce.json();
    setMovie(data);
    console.log(data);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div class="py-8 px-4 mx-auto max-w-screen-xl min-h-screen flex items-center lg:py-16 lg:px-12">
      <div>
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <img className="w-full" src={movie.Poster} />
            </div>

            <div className="flex flex-col gap-3">
            <div>
            <span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">IMDB {movie.imdbRating}</span>
            </div>
              <h1 className="text-3xl font-bold ">{movie.Title}</h1>
              <div>
                {movie.Genre !== undefined
                  ? movie.Genre.split(",").map((e) => {
                      return <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300" key={e}>{e}</span>;
                    })
                  : null}
              </div>
              <p>{movie.Plot}</p>
              <div className="flex justify-between"> 

              <div className="flex items-center">
              <RxAvatar/>
               <p className="font-bold">{movie.Rated}</p>
              </div> 
              <div className="flex items-center">
              <MdDateRange/>
               <p className="font-bold">{movie.Year}</p>
              </div> 
              <div className="flex items-center">
              <BiTime/>
               <p className="font-bold">{movie.Runtime}</p>
              </div> 
              </div>
        <Accordian movie={movie} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
