import React, { useState } from "react";
import GameList from "./GameList.js";
import GameDetails from "./GameDetails.js";
import Navbar from "../Navbar/Navbar.jsx";

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div >
      <Navbar/>
      {selectedGame ? (
        <GameDetails game={selectedGame} onBack={() => setSelectedGame(null)} />
      ) : (
        <GameList onSelectGame={setSelectedGame} />
      )}
    </div>
  );
};

export default Games;
