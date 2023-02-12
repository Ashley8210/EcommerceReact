import React, { Component } from "react";

export default class Counter extends Component {
  getName() {
    return this.props.counter.name;
  }

  getClassName() {
    if (this.props.counter.qty > 0) {
      return "ms-1 btn btn-light col-sm-4 ";
    }
    return "ms-1 btn btn-warning text-dark col-sm-4";
  }

  formatText() {
    if (this.props.counter.qty > 0) {
      return this.props.counter.qty;
    }
    return "-";
  }

  cartButton(id) {
    if (this.props.counter.qty > 0) {
      return (
        <>
          <button
            onClick={() => this.props.onIncrement(id)}
            className="btn btn-success ms-4 col-sm-3"
          >
            +
          </button>
          <button className={this.getClassName()}>
            {"     "}
            {this.formatText()}
            {"     "}
          </button>
          <button
            onClick={() => this.props.onDecrement(id)}
            className="btn btn-secondary ms-1 col-sm-3"
            disabled={"counter.qty" === 0}
          >
            -
          </button>
        </>
      );
    }
    return (
      <button
        onClick={() => this.props.onIncrement(id)}
        className="btn btn-warning text-light col-sm-12"
      >
        <b>Add to Cart</b>
      </button>
    );
  }

  render() {
    const { counter, children } = this.props;
    console.log(this.props);
    return (
      <div className="col-4 col-sm-6 col-md-4">
        <div className="card card-body d-sm-flex align-items-center mb-5">
          <div className="col-4 col-sm-12">
            <img
              className="w-100  mb-3 mb-sm-0"
              style={({ width: "50%" }, { height: "230px" })}
              src={this.props.counter.image}
              alt={this.props.counter.name}
            />
            <h5 className="menu-price">&#8369;{this.props.counter.price}</h5>
          </div>
          <div style={{ textAlign: "center" }} className="col-8 col-sm-9">
            <h4>{this.getName(counter)}</h4>
          </div>

          <div className="col-12">{this.cartButton(this.props.counter.id)}</div>
        </div>
      </div>
    );
  }
}
