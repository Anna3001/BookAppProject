import * as movieAPI from "../.shared/movieAPI.js";
import { MovieModelNoTD } from "../models/movieModelNoTD.js";

export async function getByTD(title, director) {
  try {
    const movies = await movieAPI.getMoviesByTD(title, director);
    const moviesContainer = movies.map(
      (movie) =>{
        const oneMovie = new MovieModelNoTD(movie);
        return oneMovie;
      }
    )
    
    return moviesContainer;
    
  } catch (error) {
    console.log("Getting movie by ID error - ", error);
    return false;
  }

}