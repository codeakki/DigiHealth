import React from "react";

// TODO: info is bad naming.
const PlaceCard = ({ info, key }) => {
    const { address, distanceText, name, openNow, photoUrl, timeText } = info;
    return (
        <div key={key} className="col-3 w-100 mx-4 my-4">
            <img src={photoUrl} className="image-wrapper-sm mb-2" alt="ice-cream" />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <span className="d-block mb-1">{address}</span>
                    <span className="d-block">{distanceText}</span>
                    <span className="d-block">{timeText}</span>
                </div>
                <ul className="list-group list-group-flush">
                    {openNow ? (
                        <li className="list-group-item">Open</li>
                    ) : (
                        <li className="list-group-item">Closed</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default PlaceCard;
