import React, { Component } from "react";
import {  Col, Row } from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  activateToggle = (e) => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="header">

        <Row className="navrow">
          <Col lg={6} className="logo">
            <img src={require("../../images/logo.svg")} className="logo" alt="pic" />
          </Col>

          <Col lg={6}>
            <div className="nav-link d-flex  nav-cont">
              <NavLink
                exact
                activeClassName="active"
                to="/"
                className="nav-link  "
              >
                
                Home
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                to="/OurWork"
                className="nav-link  "
              >
                Our work
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                to="/WhatWeDo"
                className="nav-link  "
              >
                What we do
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                to="/AboutUS"
                className="nav-link  "
              >
                About us
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                to="/Blog"
                className="nav-link  "
              >
                Blog
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                to="/ContactUS"
                className="nav-link  "
              >
                Contact us
              </NavLink>
            </div>

            <button className="toggle" onClick={this.activateToggle}>
              <div
                className={
                  "line1 toggle-line " + (this.state.open ? "spi2" : "str")
                }
              ></div>
              <div
                className={
                  "line2 toggle-line " + (this.state.open ? "spi" : "str")
                }
              ></div>

              <div
                className={
                  "line3 toggle-line " + (this.state.open ? "spi3" : "str")
                }
              ></div>
            </button>
          </Col>
        </Row>

        <div className={"sidenav " + (this.state.open ? "openn" : "closee")}>
          <NavLink
            exact
            activeClassName="active"
            to="/"
            className={"nav-link " + (this.state.open ? "smoth1" : "smoth")}
            onClick={this.activateToggle}
          >
            
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            to="/OurWork"
            className={"nav-link " + (this.state.open ? "smoth2" : "smoth")}
            onClick={this.activateToggle}
          >
            Our work
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            to="/WhatWeDo"
            className={"nav-link " + (this.state.open ? "smoth3" : "smoth")}
            onClick={this.activateToggle}
          >
            What we do
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            to="/AboutUs"
            className={"nav-link " + (this.state.open ? "smoth4" : "smoth")}
            onClick={this.activateToggle}
          >
            About us
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            to="/Blog"
            className={"nav-link " + (this.state.open ? "smoth5" : "smoth")}
            onClick={this.activateToggle}
          >
            Blog
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            to="/ContactUs"
            className={"nav-link " + (this.state.open ? "smoth6" : "smoth")}
            onClick={this.activateToggle}
          >
            Contact us
          </NavLink>

          <div className="talk">
            <h5> Got a project you’d like to talk about?</h5>
            <p>
              
              <strong>
                
                Call us on <Link to="/">029 2049 3819 </Link>
              </strong>
            </p>
            <p>
              <strong>
                
                Or fill in our <Link to="/">Project Form </Link>
              </strong>
            </p>
          </div>
        </div>

      </div>
    );
  }
}
