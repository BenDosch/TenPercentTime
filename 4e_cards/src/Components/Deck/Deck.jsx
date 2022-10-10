import React, { Component } from "react";
import styled from "styled-components";

import Card from "../Card/Card";

const keywords1 = "Arcane, Fire"
const keywords2 = "Arcane, Fey, Teleport"
const keywords3 = "Arcane"
const keywords4 = "Martial"

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
    this.state = {
      Cards: [{
        name: "Card1", description: "Flavor text!",
        frequency: "At-Will", origin: "Warlock",
        category: "Attack", level: "1", keywords: keywords1,
        action: "Standard Action", rangeType: "Close",
        actionSpecial: "Extra actions are awesome!",
        range: "burst 5 (10 at 11th level, 15 at 21st level)",
        target: "You or one ally", attack: "Wisdom vs Reflex",
      },
      {
        name: "Card2", description: "Is so fun.",
        frequency: "Encounter", origin: "Racial", frequencySpecial: "Cool stuff",
        category: "Power", level: "", keywords: keywords2,
        action: "Minor Action", range_type: "Area", range: "blast 10",
        target: "Each enemy in blast", attack: "Intelligence vs AC",
      },
      {
        name: "Card3", description: "Makes things go BOOM!",
        frequency: "Daily", origin: "Warlock", category: "Feature",
        level: "", keywords: keywords3, action: "Free Action",
        range_type: "Melee" , range: "weapon", target: "One creature",
        targetSpecial: "If you've been good, one extra", attack: "Charisma vs Will",
      },
      {
        name: "Card4", description: "",
        origin: "", category: "", level: "", keywords: keywords4,
        action: "Reaction", range_type: "Ranged", range: "10",
        target: "One creature", attack: "Strength vs Fortitude",
        attackSpecial: "If your sexy, Charisma vs Fortitude",
      },
      ]
    };
  }

  render () {
    return (
    <div>
      <h1>{this.props.name}</h1>
      {this.state.Cards.map(card => <Card key={card.name} {...{card}}/>)}
    </div>
    )
  }
}

export default Deck