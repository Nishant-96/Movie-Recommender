import React, { useState } from "react";
import "./styles.css";

var genres = ["Horror", "RomCom", "Thriller"];
var movieList = {
  Horror: [
    "Conjuring: IMdb 7.5",
    "Insidous: IMdb 6.8",
    "It: IMdb 6.5",
    "Annabelle: IMdb 5.9",
    "Nun: IMdb 5.3"
  ],
  RomCom: [
    "LaLa Land: IMdb 8.0",
    "French Dispatch: IMdb 7.3",
    "Yesterday: IMDb 6.8",
    "Clueless: IMdb 6.8",
    "Little Rascals: IMdb 6.3"
  ],
  Thriller: [
    "Nobody: IMdb 7.4",
    "Extraction: IMdb 6.7",
    "Stillwater: IMdb 6.3",
    "Snake Eyes: IMdb 5.7",
    "Jolt: IMdb 5.7"
  ]
};

export default function App() {
  const [genreList, setGenre] = useState("");

  function clickHandler(genre) {
    var genreList = movieList[genre];
    setGenre(genreList);
  }
  return (
    <div className="recommenderContainer">
      <div className="App">
        <h1 id="name">Movie Recommender</h1>
        {genres.map(function (genre) {
          return <button onClick={() => clickHandler(genre)}>{genre}</button>;
        })}
        <ul className="outputContainer">
          <p>Top Five: </p>
          {Object.values(genreList).map((gen) => (
            <li>{gen}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
