import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    // console.log(this.props);

    return (
      <tr>
        <td colSpan={3}>{this.props.cart.name}</td>
        <td colSpan={3}>{this.props.cart.qty}</td>
        <td colSpan={3}>{this.props.cart.price}</td>
        <td colSpan={3}>{+this.props.cart.price * +this.props.cart.qty}.00</td>
      </tr>
    );
  }
}
