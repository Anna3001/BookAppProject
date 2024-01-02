import * as movieAPI from "../.shared/movieAPI.js";

export async function deleteId(id) {
  try {

    const msg = await movieAPI.deleteById(id);
    console.log(msg);

    return true;
  } catch (error) {
    console.log("Deleting movie by ID error - ", error);
    return false;
  }

}