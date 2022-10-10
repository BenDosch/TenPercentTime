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
    const {
      frequency, keywords, frequencySpecial, action, range_type,
      actionSpecial, target, targetSpecial, attack, attackSpecial
    } = this.props

    return (
      <Grid>
        <Row>
          <BoldSpan>{frequency} &#9670; {keywords.join(", ")}</BoldSpan>
        </Row>
        {frequencySpecial && (
          <Row>
            <CardInfo><b>Special:</b> {frequencySpecial}</CardInfo>
          </Row>
        )}
        <Row>
          <BoldSpan>{action}</BoldSpan><CardInfo><b>{range_type}</b> {range_type}</CardInfo>
        </Row>
        {actionSpecial && (
          <Row>
            <CardInfo><b>Special:</b> {actionSpecial}</CardInfo>
          </Row>
        )}
        {target && (
          <Row>
            <CardInfo><b>Target:</b> {target}</CardInfo>
          </Row>
        )}
        {targetSpecial && (
          <Row>
            <CardInfo><b>Special:</b> {targetSpecial}</CardInfo>
          </Row>
        )}
        {attack && (
          <Row>
            <CardInfo><b>Attack:</b> {attack}</CardInfo>
          </Row>
        )}
        {attackSpecial && (
          <Row>
            <CardInfo><b>Special:</b> {attackSpecial}</CardInfo>
          </Row>
        )}
      </Grid>
    );
  }
};

export default Instructions;
