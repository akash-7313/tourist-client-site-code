import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const DestinationDetails = (props) => {
  // console.log(props.place);
  const { _id, description, destination, location, img, cost } = props.place;

  const url = `destination/${_id}`;

  return (
    <Col>
      <Card className="shadow-sm h-100">
        <Card.Img className="h-100 img-fluid" variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <b className="text-success">
              {destination}, {location}
            </b>
          </Card.Title>
          <Card.Text>
            <small className="text-muted">{description}</small>
          </Card.Text>
        </Card.Body>

        <div className="d-flex justify-content-between align-items-center text-muted px-3 mb-2">
          <b className="text-secondary">
            <small>Tour Cost: ${cost}k</small>
          </b>
          <NavLink to={url} className="ps-3">
            <Button variant="warning" className="btn-sm">
              <i className="fas fa-plane-departure"></i> Book Now
            </Button>
          </NavLink>
        </div>
      </Card>
    </Col>
  );
};

export default DestinationDetails;
