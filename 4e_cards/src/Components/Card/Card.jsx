import React, { Component } from "react";
import _ from "lodash";
import Title from "./Title";
import Instructions from "./Instructions";
import { CardBack, CardFront, Detail, FlipCard } from "./CardStyles";


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
      target, targetSpecial, attack, attackSpecial, details
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
          {details.map(detail => <Detail key={detail.name}>{detail.name && (<b>{detail.name}: </b>)}{detail.text}</Detail>)}
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
