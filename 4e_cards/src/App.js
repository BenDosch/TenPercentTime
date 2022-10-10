import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Deck from "./Components/Deck/Deck"

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <Deck name="Sample Deck"/>
      </div>
    </div>
  );
}

export default App;
