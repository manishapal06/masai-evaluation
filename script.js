const movies = [
  { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, duration: 148 },
  { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, duration: 152 },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, duration: 169 },
  { title: "Tenet", year: 2020, genre: "Sci-Fi", rating: 7.4, duration: 150 },
  { title: "Dunkirk", year: 2017, genre: "War", rating: 7.9, duration: 106 },
  { title: "The Prestige", year: 2006, genre: "Drama", rating: 8.5, duration: 130 },
];
const sortedTitles=movies.sort((a,b)=>b.rating-a.rating).map(m=>m.title);
console.log("Sorted Titles:",sortedTitles);
const sciFiMovies=movies.filter(m =>m.genre==="Sci-Fi");
console.log("Sci-Fi Movies",sciFiMovies);
const movieStrings=movies.map(m =>`${m.title}(${m.year})-${m.duration}mins`);
console.log("Movies Strings:",movieStrings);
const avgDuration=(movies.reduce((sum,m)=>sum+m.duration,0)/movies.length).toFixed(2);
console.log("Average Duration:",avgDuration);
const highestRated=movies.reduce((max,m)=> m.rating>max.rating?m:max).title;
console.log("Highest Rated Movie:",highestRated)