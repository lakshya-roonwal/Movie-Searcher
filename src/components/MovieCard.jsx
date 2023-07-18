import React from 'react'
import { Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react'
import { Box, Button, Container, Heading, Image, Text,ButtonGroup, SimpleGrid } from '@chakra-ui/react';
import { createSearchParams, useNavigate } from "react-router-dom";

const MovieCard = ({movie}) => {
    const navigate = useNavigate();

    const getDetails=()=>{
        console.log(movie);
        navigate(`/:${movie.imdbID}`);
          
    }
  return (
    <>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a onClick={getDetails}>
        <img src={movie.Poster} class="rounded-t-lg w-full" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.Title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.Year}</p>
        <button onClick={getDetails} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Details
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
</div>

    </>
      
  )
}

export default MovieCard
