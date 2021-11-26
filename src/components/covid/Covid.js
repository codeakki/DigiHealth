import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import India from "./india/india";
import State from "./state/state";

import Footer from "./footer/footer";
import Header from "./header/headers";

export default class Covid extends Component {
  render() {
    return (
      <div className="container-fluid p-3 main">
        <Header />
        <center>
          <div className="container main p-3 mt-3">
            <State />
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <India />
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Footer />
              </Col>
            </Row>
          </div>
        </center>
      </div>
    );
  }
}