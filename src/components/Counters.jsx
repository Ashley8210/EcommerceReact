import React, { Component } from "react";
import Counter from "./Counter";
import Cart from "./Cart";

export default class Counters extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, counters, onReset } =
      this.props;
    // console.log(this.props);
    return (
      <>
        <div>
          {/* <button onClick={onReset} className="btn btn-primary ms-4 mt-2 mb-2">
      Reset
    </button> */}

          <div className="container-fluid pt-5">
            <div className="container">
              <div className="">
                <div className="section-title"></div>
                <div className="col-12">
                  <h1 className="mb-5">Beware! You’ll love the sushi here.</h1>
                  <h4 className="mb-5">All Food Items are here.</h4>
                  <div className="d-sm-flex flex-start flex-wrap" id="menu">
                    {counters.map((counter) => (
                      <Counter
                        onDelete={onDelete}
                        counter={counter}
                        key={counter.id}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
