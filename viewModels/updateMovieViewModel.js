import * as movieAPI from "../.shared/movieAPI.js";
import { MovieModel } from "../models/movieModel.js";

export async function updateMovie(movie) {
  try {
    const id = movie.getID();
    console.log(id);
    const msg = await movieAPI.updateById(movie, id);
    console.log(msg);

  } catch (error) {
    console.log("Updating movie error - ", error);
    return false;
  }

}