import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import India from "./components/covid/india/india";
import State from "./components/covid/state/state";
import Footer from "./components/covid/footer/footer";
import Headers from "./components/covid/header/headers";
 import styled from "styled-components";
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
const NavMenu = styled.div`

  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
  
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 18px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      font-weight :bold;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

   @media (max-width: 768px) {
    display: none;
  } 
`;