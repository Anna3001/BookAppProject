export class MovieModel {
  constructor({ id, title, director, country, date}) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.country = country;
    this.date = date;
  }

  getID() {
    return this.id;
  }

  setID(id) {
    this.id = id;
  }

  setTitle(title) {
    this.title = title;
  }

  setDirector(director) {
    this.director = director;
  }

  setCountry(country) {
    this.country = country;
  }

  setDate(date) {
    this.date = date;
  }
  
  merge() {
    return {id: this.id, title: this.title, director: this.director, country: this.country};
  }
}