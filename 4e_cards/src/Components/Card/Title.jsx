import React, { Component } from "react";
import styled from "styled-components";

import { AtWillGreen, EncounterRed, DailyGray, CardColorDark } from "./CardStyles";

const CardHeader = styled.div`
  color: white;
  height: 2em;
  width: auto;
  background-color: ${props =>
    props.frequency === "At-Will" ? AtWillGreen
    : props.frequency === "Encounter" ? EncounterRed
    : props.frequency === "Daily" ? DailyGray
    : AtWillGreen
  };
`;

const CardName = styled.span`
  float: left;
  font-size: 1.5em;
  font-weight: bold;
  position: relative;
  top: 0.10em;
  left: 0.20em;
`;

const CardOrigin = styled.span`
  font-size: 1em;
  color: white;
  float: right;
  position: relative;
  top: 0.60em;
  right: 0.40em;
`;

const CardDescription = styled.div`
  color: black;
  text-align: left;
  background-color: ${CardColorDark};
`;

/**
 * Component for rendering the title section of a power card.
 *
 * @params {object} props
 *
 * @returns {React.Element}
 */

class Title extends Component {
  render() {
    return (
      <div>
        <CardHeader frequency={this.props.frequency}>
          <CardName>{this.props.name}</CardName>
          <CardOrigin>{this.props.origin} {this.props.category} {this.props.level}</CardOrigin>
        </CardHeader>
        <CardDescription>{this.props.description}</CardDescription>
      </div>
    );
  }
}

export default Title;
