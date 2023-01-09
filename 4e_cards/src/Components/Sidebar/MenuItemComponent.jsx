import React, { useState } from "react";
import { any, func, string } from "prop-types";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  padding-top: 0.25em;
  padding-left: 1em;
  font-weight: bold;
`;

const SubItem = styled.div`
  display: flex;
  flex-direction: column;
`;


function MenuItemComponent({ children, title, onClick }) {
  const [isExpanded, setIsExpanded] = useState(false);


  const handelClick = () => {
    if (children){
      setIsExpanded(!isExpanded)
    }
    else{
      const el = document.getElementById(`${title}`);
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <Item key={title}>
      {onClick && <span onClick={onClick}>{title}</span>}
      {!onClick &&<span onClick={handelClick}>{title}</span>}
      {isExpanded && <SubItem>{children}</SubItem>}
    </Item>
  );
}

MenuItemComponent.defaultProps = {};

MenuItemComponent.propTypes = {
  children: any,
  id: string,
  title: string,
  onClick: func,
};

export default MenuItemComponent;
