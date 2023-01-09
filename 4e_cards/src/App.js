import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Deck from "./Components/Deck/Deck";

const deckDict = require("./Data/Decks.json");

function App() {
  const [activeDeck, setActiveDeck] = useState("Cleric");
  const deckList = Object.keys(deckDict);
  const cardList = deckDict[activeDeck];
  
  return (
    <div className="App" id="outer-container">
      <Sidebar
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        Cards={cardList}
        Decks={deckList}
        setActiveDeck={setActiveDeck}
      />
      <div id="page-wrap">
        <Deck name={activeDeck} Cards={cardList} />
      </div>
    </div>
  );
}

export default App;
