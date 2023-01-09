import React from 'react';
import Menu from "./MenuComponent";
import MenuItem from './MenuItemComponent';
import { CreateDeckButton, DeleteDeckButton, EditDeckButton } from '../Buttons/Deck';
import './Sidebar.css';
import styled from "styled-components";


const Sidebar = props => {

  return (
    <Menu>
      <MenuItem title="Decks">
        {props.Decks.map(deck => <MenuItem key={deck} title={deck} onClick={() => {props.setActiveDeck(deck)}}/>)}
        <CreateDeckButton />
        <EditDeckButton />
        <DeleteDeckButton />
      </MenuItem>
      <MenuItem title="Cards">
        {props.Cards.map(card => <MenuItem key={card} title={card}/>)}
      </MenuItem>
      
    </Menu>
  );
};

export default Sidebar
