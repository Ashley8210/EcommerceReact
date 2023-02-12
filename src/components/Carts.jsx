import React, { Component } from "react";
import Cart from "./Cart";

export default class Carts extends Component {
  getTotal(total) {
    if (total === 0) {
      return "";
    }
    return (
      <>
        <th colSpan={3}>Total</th>
        <th colSpan={3}></th>
        <th colSpan={3}></th>
        <th colSpan={3}>&#8369; {total}.00</th>
      </>
    );
  }
  render() {
    const { carts, children } = this.props;

    const total = this.props.carts
      .filter((counter) => counter.qty > 0)
      .reduce((total, counters) => (total = total + counters.totalPrice), 0);

    return (
      <>
        <div
          id="cart"
          className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom"
        >
          <div className="container py-3">
            <h1 className="display-4 text-black text-uppercase">Cart</h1>
            <li class="nav-item">
              <a class="nav-link" href="service.html">
                Add Product
              </a>
            </li>
          </div>
        </div>

        <div className="container-fluid pt-5">
          <div className="container">
            <div className="table-responsive-sm">
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan={3}>Product</th>
                    <th colSpan={3}>Quantity</th>
                    <th colSpan={3}>Price</th>
                    <th colSpan={3}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((cart) => (
                    <Cart
                      cart={cart}
                      key={cart.id}
                      total={+cart.price * +cart.qty}
                    />
                  ))}
                </tbody>
                <tfoot>
                  <tr>{this.getTotal(total)}</tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
