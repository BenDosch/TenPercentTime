import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Deck from "./Components/Deck/Deck"

const cardList = require("./Data/Decks.json")

function App() {
  const activeDeck = "Cleric"
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <Deck name={activeDeck} Cards={cardList[activeDeck]}/>
      </div>
    </div>
  );
}

export default App;
