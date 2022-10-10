import React, { Component } from "react";
import styled from "styled-components";

import Card from "../Card/Card";

const data = require("../../Data/Cards.json")
const cardDict = Object.assign({}, ...data["Cards"].map((card) => ({[card.name]: card})));

const CardDeck = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

/**
 * Component that renders a 4e Power Card Deck
 */
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
    <div>
      <h1>{this.props.name}</h1>
      <CardDeck>
        {this.props.Cards.map(card => <Card key={card} {...cardDict[card]}/>)}
      </CardDeck>
    </div>
    )
  }
}

export default Deck