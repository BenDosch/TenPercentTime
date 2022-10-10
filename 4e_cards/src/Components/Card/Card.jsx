import React, { Component } from "react";
import styled, { css } from "styled-components";

import Title from "./Title";
import Instructions from "./Instructions";

const FlipCard = styled.article`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 25px 12px 18px;
  margin: 1.16%;
  background-color: transparent;
  width: 30em;
  min-height: 20em;
  flex: 1, 1. auto
  border: 1px solid black;
  float: left;
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  transition: 1s;

  &:focus,
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }

  &.flipped {
    & > div:first-of-type {
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type {
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`;

// Card sides
const CardSide = css`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  backface-visibility: hidden;
  transition: all 1s ease-in-out;
`;

// Card side - front
const CardFront = styled.div`
  ${CardSide};
`;

// Card side - back
const CardBack = styled.div`
  ${CardSide};

  transform: rotateY(-180deg);
`;

/**
 * Component that renders a 4e Power Card
 */
class Card extends Component {

  flipCard(event) {
    event.currentTarget.classList.toggle('flipped')
  }

  render() {
    const {
      name, description, frequency, origin,category,
      level, frequencySpecial, keywords, 
      action, actionSpecial, range_type, range,
      target, targetSpecial, attack, attackSpecial,
    } = this.props;

    return (
      <FlipCard onClick={this.flipCard.bind(this)}>
        <CardFront>
          <Title
            name={name} description={description} 
            frequency={frequency} origin={origin}
            category={category} level={level}
          />
          <Instructions
            frequency={frequency} frequencySpecial={frequencySpecial} keywords={keywords}
            action={action} actionSpecial={actionSpecial}
            range_type={range_type} range={range}
            target={target} targetSpecial={targetSpecial}
            attack={attack} attackSpecial={attackSpecial}
          />
        </CardFront>
        <CardBack>
          <Title
            name={name} description={description} 
            frequency={frequency} origin={origin}
            category={category} level={level}
          />
          {frequency!=="Encounter" && frequency!=="Daily"  ? (<h1>Recharging?</h1>) :
          (<h1>Recharges after a {frequency==="Encounter" ? 'short' : ''}{frequency==="Daily" ? 'long' : ''} rest</h1>)}
        </CardBack>
      </FlipCard>
    );
  }
}

export default Card;
