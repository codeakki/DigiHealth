import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import India from "./components/covid/india/india";
import State from "./components/covid/state/state";
import Footer from "./components/covid/footer/footer";
import Headers from "./components/covid/header/headers";

export default class CovidApp extends Component {
    render() {
      return (
        <div className="container-fluid p-3 main">
          <Headers />
          <center>
            <button
              className="btn btn-dark mt-2"
              onClick={() => window.location.reload()}
            >
              Reload
            </button>
          </center>
  
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