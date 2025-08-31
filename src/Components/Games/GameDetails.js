import React from "react";
import "./GameDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const GameDetails = ({ game, onBack }) => {
  if (!game) return <p>No game selected</p>;

  return (
    <div className="game-details">
      <button className="back-button" onClick={onBack}>  <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#109CF1" }} />

      </button>
      <iframe 
        className="game-frame"
        src={game.iframeUrl}
        title={game.title}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GameDetails;
