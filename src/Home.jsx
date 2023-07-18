import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Center,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import MovieCard from "./components/MovieCard";
import SearchBox from "./components/SearchBox";

const Home = () => {
  const [searchData, setsearchData] = useState([]);
  const [otherInfo, setOtherInfo] = useState(
<div><h2>Search A Movie</h2></div>
  );

  const handleMovieSearch = async () => {
    try {
      setOtherInfo(<Spinner />);
      const movieToBeSearched = document.getElementById("movie-input").value;
      const responce = await fetch(
        `https://www.omdbapi.com/?s='${movieToBeSearched}'&apikey=6af4e10d`
      );
      const data = await responce.json();
      if (data.Response === "False") {
        console.log("Error Occured");
        setsearchData([]);
        setOtherInfo(<div><h2>Movie not found</h2></div>);
      }
      setsearchData(data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="home">
      <div>
        <SearchBox handleMovieSearch={handleMovieSearch} />
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {searchData
            ? searchData.map((element) => {
                return <MovieCard movie={element} key={element.imdbID}/>;
              })
            : otherInfo}
        </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
