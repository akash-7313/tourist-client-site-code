import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Testimonials.css";
import user1 from "../../images/testimonial/user1.png";


const Testimonials = () => {
  return (
    <div className="testimonial-banner">
      <div className="container">
        <h3 className="text-center pt-5 text-primary">
          Our Happy Client's Says
        </h3>
        <Row xs={1} md={3} className="g-4 py-5 px-3">
          <Col className="text-white text-center p-5 shadow rounded-3">
            <Card.Img
              variant="top"
              src={user1}
              className="rounded-circle w-25"
            />
            <Card.Title>Jhon Deo</Card.Title>
            <Card.Text>June 16, 2019</Card.Text>
            <Card.Text>
              Tourism is the activities of people traveling to and staying in
              places outside their usual environment for leisure, business or
              other purposes for not more than one consecutive year.
            </Card.Text>
          </Col>
          <Col className="text-white text-center p-5 shadow rounded-3">
            <Card.Img
              variant="top"
              src={user1}
              className="rounded-circle w-25"
            />
            <Card.Title>Jhon Deo</Card.Title>
            <Card.Text>June 16, 2019</Card.Text>
            <Card.Text>
              Tourism is the activities of people traveling to and staying in
              places outside their usual environment for leisure, business or
              other purposes for not more than one consecutive year.
            </Card.Text>
          </Col>
          <Col className="text-white text-center p-5 shadow rounded-3">
            <Card.Img
              variant="top"
              src={user1}
              className="rounded-circle w-25"
            />
            <Card.Title>Jhon Deo</Card.Title>
            <Card.Text>June 16, 2019</Card.Text>
            <Card.Text>
              Tourism is the activities of people traveling to and staying in
              places outside their usual environment for leisure, business or
              other purposes for not more than one consecutive year.
            </Card.Text>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;
