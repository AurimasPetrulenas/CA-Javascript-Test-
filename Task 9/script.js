/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive(movie) {
    return this.budget >= 200000000
      ? `${this.title} was expensive`
      : `${this.title}`;
  }
}
const titanic = new Movie("Titanic", "Cameron", 200000000);
const avatar = new Movie("Avatar", "Cameron", 237000000);
const spiderman = new Movie("Spiderman", "Raimi", 139000000);
