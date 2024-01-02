import { MovieModel } from "../models/movieModel.js";

const URL = "http://127.0.0.1:3000/";

export async function fetchAPI(ep, data) {

  return fetch(ep, data).then((res) => {
    if (res.ok) { return res.json(); }
    else { throw new Error("ERROR!!!"); }
  });
}

export async function getMovieById(id) {
  const ep = `${URL}api/getMovieByID/${id}`;

  try {
    const Movies = await fetchAPI(ep, {});
    const movies = Movies.map((movie) => new MovieModel(movie));

    return movies;
  } catch {
    console.error("Error:", error);
  }
}  

export async function getMoviesByTD(title, director) {
  const ep = `${URL}api/getByTD/${title}/${director}`;
  
  try {
    const Movies = await fetchAPI(ep, {});
    const movies = Movies.map((movie) => new MovieModel(movie));
    return movies;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getAllMovies(start) {
  const ep = `${URL}api/getAllMovies`;
  
  try {
    const Movies = await fetchAPI(ep, {});
    const movies = Movies.map((movie) => new MovieModel(movie));

    if (start > movies.length) { return;}
    const cuttedMovies = movies.filter((element, index) => index >= start && index <= (start + 6));
    return cuttedMovies;
    
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function updateById(movie, id) {
  const ep = `${URL}api/updateMovieByID/${id}`;

  console.log(movie);

  const method = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  };

  try {
    const message = await await fetchAPI(ep, method);
    return message;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}

export async function createMovie(movie) {
  const ep = `${URL}api/createMovie`;
    
  const method = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(movie),
  };

  try {
    
    const message = await fetchAPI(ep, method);
    return message;
  } catch (error) {
    console.error("Error:", error);

    throw error;
  }
}  

export async function createUser(user) {
  const ep = `${URL}api/createUser`;

  const method = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  };

  try {
    const message = await fetchAPI(ep, method);
    return message;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function deleteById(id) {
  const ep = `${URL}api/deleteMovieByID/${id}`;
  const m = { method: "DELETE" };

  try {
    const message = await fetchAPI(ep, m);
    return message;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function registerUser(username, password, role) {
  const registrationEndpoint = `${URL}api/register`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      role,
    }),
  };

  try {
    const response = await fetchAPI(registrationEndpoint, requestOptions);
    return response;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
}