import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <div class="hero_area">
          {/* <!-- header section strats --> */}
          <header class="header_section">
            <div class="container-fluid">
              <nav class="navbar navbar-expand-lg custom_nav-container">
                <a class="navbar-brand" href="index.html">
                  <img src="images/logo.png" alt="" />
                  <span> It's Sushi Time </span>
                </a>

                <div class="navbar-collapse" id="">
                  <div class="container">
                    <div class="mr-auto flex-column flex-lg-row align-items-center">
                      <ul class="navbar-nav justify-content-between">
                        <div class="d-none d-lg-flex">
                          <li class="nav-item">
                            <a class="nav-link" href="fruit.html">
                              Contact Number : 01234567890
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="service.html">
                              itssushitime@gmail.com
                            </a>
                          </li>
                        </div>
                        <div class="d-none d-lg-flex">
                          <form class="form-inline my-2 ml-5 mb-3 mb-lg-0">
                            <button
                              class="btn my-2 my-sm-0 nav_search-btn"
                              type="submit"
                            ></button>
                          </form>
                        </div>
                        <div class="d-none d-lg-flex">
                          <li class="nav-item">
                            <a class="nav-link" href="#cart">
                              <i className="fas fa-shopping-cart"></i>
                              <span>
                                {this.props.totalCount > 0 && (
                                  <span className="badge bg-secondary ms-2">
                                    {this.props.totalCount}
                                  </span>
                                )}
                              </span>
                            </a>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>

                  <div class="custom_menu-btn">
                    <button onclick="openNav()"></button>
                  </div>
                  <div id="myNav" class="overlay">
                    <a
                      href="javascript:void(0)"
                      class="closebtn"
                      onclick="closeNav()"
                    >
                      &times;
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </header>
        </div>
      </>
    );
  }
}
