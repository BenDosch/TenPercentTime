import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';



const Sidebar = props => {
  return (
    <Menu>
      <a className="menu-item" href="/decks">
        Decks
      </a>
      <a className="menu-item" href="/cards">
        Cards
      </a>
    </Menu>
  );
};

export default Sidebar
