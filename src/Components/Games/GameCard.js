import React from "react";
import "./GameCard.css"; 
const GameCard = ({ game, onSelectGame }) => {
  return (
<div className="allcards">
    <div className="game-card" onClick={() => onSelectGame(game)}>
          <img src={game.image} alt={game.title} className="game-image" />
          <h2 className="game-title">{game.title}</h2>
          <div className="game-tags">
            {game.categories.map((category, index) => (
              <span key={index} className="tag">
                {category}
              </span>
            ))}
          </div>
          <a href="#" className="see-all">See all {game.totalGames} games</a>
      </div>
</div>

  );
};

export default GameCard;
