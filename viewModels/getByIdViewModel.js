import * as movieAPI from "../.shared/movieAPI.js";
import { MovieModelNoId } from "../models/movieModelNoId.js";

export async function getById(id) {
  try {
    const movies = await movieAPI.getMovieById(id);
    const moviesContainer = movies.map(
      (movie) =>{
        const oneMovie = new MovieModelNoId(movie);
        return oneMovie;
      }
    )
    
    return moviesContainer;
    
  } catch (error) {
    console.log("Getting movie by ID error - ", error);
    return false;
  }

}