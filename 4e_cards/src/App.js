import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Deck from "./Components/Deck/Deck"

const cardList = require("./Data/Decks.json")

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <Deck name="Sample Deck" Cards={cardList["All Cards"]}/>
      </div>
    </div>
  );
}

export default App;
