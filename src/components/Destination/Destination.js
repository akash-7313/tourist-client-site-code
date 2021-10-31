import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import DestinationDetails from "../DestinationDetails/DestinationDetails";

const Destination = () => {
  const [destination, setDestination] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    setIsLoadingData(true);
    fetch("https://powerful-anchorage-66820.herokuapp.com/allDestination")
      .then((res) => res.json())
      .then((data) => {
        setDestination(data);
        setIsLoadingData(false);
      });
  }, []);

  if (isLoadingData) {
    return (
      <div className="text-center my-5 py-5">
        <Spinner className="my-5" animation="border" variant="primary" />
      </div>
    );
  }


  return (
    <div className="container my-5">
      <div className="pt-5 text-center">
        <h2 className="text-secondary">Popular Destinations</h2>
        <p className="text-muted">
          A tourist destination is a city, town, or other area that is <br />
          significantly dependent on revenues from tourism, or "a country,
          state, region, city, or town which is <br /> marketed or markets
          itself as a place for tourists to visit".
        </p>
      </div>
      <Row xs={1} md={3} className="g-4 py-4 px-3">
        {destination.map((place, index) => (
          <DestinationDetails
            key={place._id}
            place={place}
          ></DestinationDetails>
        ))}
      </Row>
    </div>
  );
};

export default Destination;
