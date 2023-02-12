import React, { Component } from "react";
import Carts from "./components/Carts";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

export default class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        qty: 0,
        name: "Sashimi",
        price: 150,
        totalPrice: 0,
        image: "./img/sashimi.jpg",
      },
      {
        id: 2,
        qty: 0,
        name: "Maki",
        price: 200,
        totalPrice: 0,
        image: "./img/maki.jpg",
      },
      {
        id: 3,
        qty: 0,
        name: "Nigiri",
        price: 250,
        totalPrice: 0,
        image: "./img/nigiri.jpg",
      },
      {
        id: 4,
        qty: 0,
        name: "Temaki",
        price: 300,
        totalPrice: 0,
        image: "./img/temaki.jpg",
      },
      {
        id: 5,
        qty: 0,
        name: "Gunkan",
        price: 200,
        totalPrice: 0,
        image: "./img/gunkan.jpg",
      },
      {
        id: 6,
        qty: 0,
        name: "Uramaki",
        price: 180,
        totalPrice: 0,
        image: "./img/uramaki.jpg",
      },
    ],
  };

  handleIncrement = (id) => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            qty: counter.qty + 1,
            totalPrice: (counter.qty + 1) * counter.price,
          };
        }
        return counter;
      }),
    });
  };

  handleDecrement = (id) => {
    this.setState({
      counters: this.state.counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            qty: counter.qty - 1,
            totalPrice: (counter.qty - 1) * counter.price,
          };
        }

        return counter;
      }),
    });
  };

  getCountersWithqty = () => {
    return this.state.counters.filter((counter) => counter.qty > 0).length;
  };

  getCart = () => {
    return this.state.counters.filter((counter) => counter.qty > 0);
  };

  render() {
    return (
      <div>
        <NavBar totalCount={this.getCountersWithqty()} />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <Carts carts={this.getCart()} />
      </div>
    );
  }
}
