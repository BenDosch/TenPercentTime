import React, { Component } from "react";

import {
  CardDescription, CardHeader, CardName, CardOrigin
} from "./CardStyles";


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
