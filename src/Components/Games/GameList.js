import React from "react";
import GameCard from "./GameCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import kindergartenImg from "../../imgs/4f522921-0e30-4cfa-9329-876253e13399.jpg";
import grade1Img from "../../imgs/95292326-a18a-4bbe-b8eb-44039054d529.jpg";
import spaceImg from "../../imgs/c0a83bc1-2d9e-4871-b75a-9f1dc7a80d48.jpg";
import carrotImg from "../../imgs/3fa97bc6-a7ba-42d7-b1d2-81749e02874d.jpg";
import findPairImg from "../../imgs/25bd36a5-d495-4ba7-858b-e00992b56fa0.jpg";
import animalsImg from "../../imgs/25ab0809-7855-4a1c-8dec-117835c20b27.jpg";
import digItImg from "../../imgs/r.png";
import easyMathImg from "../../imgs/m.png";
import friendsImg from "../../imgs/girl.png";
import rosieCareImg from "../../imgs/girl_on_bike.png";
import numbersImg from "../../imgs/girl_over_book.png";
import colorsImg from "../../imgs/b1.png";
import "./GameList.css"; 
const games = [
  { id: 1, title: "Draw The Bird Path", image: kindergartenImg, iframeUrl: "https://www.onlinegames.io/games/2022/construct/147/draw-the-bird-path/index.html", categories: ["Shapes", "Addition", "Counting"], totalGames: 320 },
  { id: 2, title: "Dino addition race", image: carrotImg, iframeUrl: "https://games.crazygames.com/en_US/dino-addition-race/index.html?v=1.328", categories: ["Shapes", "Geometry"], totalGames: 180 },
  { id: 3, title: "Nullify", image: findPairImg, iframeUrl: "https://games.crazygames.com/en_US/nullify/index.html?v=1.328", categories: ["Memory", "Logic"], totalGames: 100 },
  { id: 4, title: "Math Duck", image: animalsImg, iframeUrl: "https://games.crazygames.com/en_US/math-duck/index.html?v=1.328", categories: ["Animals", "Nature"], totalGames: 120 },
  { id: 5, title: "Cups", image: spaceImg, iframeUrl: "https://games.crazygames.com/en_US/cups---water-sort-puzzle/index.html?v=1.328", categories: ["Counting", "Numbers"], totalGames: 150 },
  { id: 6, title: "Find it", image: grade1Img, iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/find-it/index-og.html", categories: ["Math", "Reading", "Science"], totalGames: 200 },
  { id: 7, title: "Dig It", image: digItImg, iframeUrl: "https://www.jopi.com/gam/space-slide/", categories: ["Puzzle", "Adventure"], totalGames: 250 },
  { id: 8, title: "Easy Math", image: easyMathImg, iframeUrl: "https://www.jopi.com/gam/painting-tiles/", categories: ["Addition", "Counting"], totalGames: 130 },
  { id: 9, title: "Friends", image: friendsImg, iframeUrl: "https://www.jopi.com/gam/key-quest/", categories: ["Social", "Numbers"], totalGames: 280 },
  { id: 10, title: "Rosie Care", image: rosieCareImg, iframeUrl: "https://www.jopi.com/gam/summer-maze/", categories: ["Health", "Caring"], totalGames: 190 },
  { id: 11, title: "Numbers Game", image: numbersImg, iframeUrl: "https://www.jopi.com/gam/summer-maze/", categories: ["Math", "Logic"], totalGames: 210 },
  { id: 12, title: "Colors Game", image: colorsImg, iframeUrl: "https://www.jopi.com/gam/summer-maze/", categories: ["Art", "Colors"], totalGames: 170 }
];

const GameList = ({ onSelectGame }) => {
  return (
    <div className="game-list">
      <h1 className="bb">Let's Play!</h1>
      <div className="game-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onSelectGame={onSelectGame} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
