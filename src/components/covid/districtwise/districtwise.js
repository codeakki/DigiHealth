import React, { Component } from "react";


export default class districtwise extends Component {
  render() {
    return (
      <div>
        {this.props.stateData.length !== 0 ? (
          <div>
            <br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4 text-dark">
              {this.props.stateData.map((list, i) => {
                return (
                  <div className="col mt-3 " key={i}>
                    <div
                      className="card h-100 shadow"
                      style={{ borderRadius: "20px" }}
                    >
                      <div
                        className="card-header "
                        style={{ borderRadius: "20px" }}
                      >
                        <h4>{list.name}</h4>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title ">
                          Confirmed{" "}
                          <span className="text-primary ml-2">
                            {list.data.confirmed}
                          </span>
                        </h5>
                        <h5 className="card-title ">
                          Deaths{" "}
                          <span className="text-danger ml-2">
                            {list.data.deaths}
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>

                );
              })}
              {/* </Row> */}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
