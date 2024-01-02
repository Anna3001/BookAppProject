import * as movieAPI from "../.shared/movieAPI.js";
import { MovieModelNoCountry } from "../models/movieModelNoCountry.js";

export async function getAll(start, page) {
  try {
    start = start[0];

    if (start < 0) {
      start = 0;
    }

    const movies = await movieAPI.getAllMovies(start);
    const moviesContainer = movies.map(
      (movie) =>{
        const oneMovie = new MovieModelNoCountry(movie);
        return Object.values(oneMovie.merge());
      }
    )

    return moviesContainer;
    
  } catch (error) {
    console.log("Getting all movies error - ", error);
    return false;
  }

}