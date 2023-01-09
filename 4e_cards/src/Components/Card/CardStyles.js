import styled, { css } from "styled-components";

const CardColorDark = "#d2d0ba";
const AtWillGreen = "#609868";
const EncounterRed = "#951733";
const DailyGray = "#4b4c4d";
const ItemYellow = "#d8941c";

const Grid = styled.div`

`;

const BoldSpan = styled.span`
  display: flex;
  font-align: left;
  flex: 1;
  font-weight: bold;
`;

// TODO: get height to adjust to content.
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
  overflow-y: scroll;

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

// Power Details
const Detail = styled.div`
  text-align: left;
  padding-left: 0.5em;

  :nth-child(odd) {
    background-image: linear-gradient(to right, ${CardColorDark} , white);
  }
`;

const CardHeader = styled.div`
  color: white;
  height: auto;
  width: auto;
  padding-bottom: 0.5em;
  background-color: ${props =>
    props.frequency === "At-Will" ? AtWillGreen
    : props.frequency === "Encounter" ? EncounterRed
    : props.frequency === "Daily" ? DailyGray
    : ItemYellow
  };
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardName = styled.span`
  float: left;
  font-size: 1.1em;
  font-weight: bold;
  text-align: left;
  position: relative;
  top: 0.2em;
  left: 0.5em;
  flex-basis: 60%;
`;

const CardOrigin = styled.span`
  font-size: 1em;
  color: white;
  float: right;
  position: relative;
  top: 0.3em;
  right: 0.5em;
  flex-basis: 40%;
  text-align: right;
`;

const CardDescription = styled.div`
  color: black;
  text-align: left;
  padding-left: 0.5em;
  background-image: linear-gradient(to right, ${CardColorDark} , white);
`;

const Row = styled.div`
  display: flex;
  padding-left: 0.5em;
`;

export {
  AtWillGreen,
  BoldSpan,
  CardBack,
  CardColorDark,
  CardDescription,
  CardFront,
  CardHeader,
  CardName,
  CardOrigin,
  CardSide,
  DailyGray,
  Detail,
  EncounterRed,
  FlipCard,
  Grid,
  Row,
};