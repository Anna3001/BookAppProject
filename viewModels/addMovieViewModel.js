import * as movieAPI from "../.shared/movieAPI.js";

export async function addMovie(movie) {
  try {
    
    const msg = await movieAPI.createMovie(movie);
    console.log(msg);

  } catch (error) {
    console.log("Adding movie error - ", error);
    return false;
  }

}