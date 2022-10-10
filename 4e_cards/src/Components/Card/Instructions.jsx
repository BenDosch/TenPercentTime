import React, { Component } from "react";
import styled from "styled-components";

import { Grid, Row, BoldSpan } from "./CardStyles";

const CardInfo = styled.span`
  color: black;
  flex: 1;
  text-align: left;
`;

/**
 * Component for rendering the instructions section of a power card.
 *
 * @params {object} props
 *
 * @returns {React.Element}
 */

class Instructions extends Component{
  render () {
    return (
      <Grid>
        <Row>
          <BoldSpan>{this.props.frequency} &#9670; {this.props.keywords}</BoldSpan>
        </Row>
        {this.props.frequencySpecial && (
          <Row>
            <CardInfo><b>Special:</b> {this.props.frequencySpecial}</CardInfo>
          </Row>
        )}
        <Row>
          <BoldSpan>{this.props.action}</BoldSpan><CardInfo><b>{this.props.range_type}</b> {this.props.range}</CardInfo>
        </Row>
        {this.props.actionSpecial && (
          <Row>
            <CardInfo><b>Special:</b> {this.props.actionSpecial}</CardInfo>
          </Row>
        )}
        {this.props.target && (
          <Row>
            <CardInfo><b>Target:</b> {this.props.target}</CardInfo>
          </Row>
        )}
        {this.props.targetSpecial && (
          <Row>
            <CardInfo><b>Special:</b> {this.props.targetSpecial}</CardInfo>
          </Row>
        )}
        {this.props.attack && (
          <Row>
            <CardInfo><b>Attack:</b> {this.props.attack}</CardInfo>
          </Row>
        )}
        {this.props.attackSpecial && (
          <Row>
            <CardInfo><b>Special:</b> {this.props.attackSpecial}</CardInfo>
          </Row>
        )}
      </Grid>
    );
  }
};

export default Instructions;
