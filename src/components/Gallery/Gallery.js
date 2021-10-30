import React from "react";
import "./Gallery.css";
import { Card, Col, Row } from "react-bootstrap";
import img1 from "../../images/gallery/nature.jpg";
import img2 from "../../images/gallery/hills.jpeg";
import img3 from "../../images/gallery/greenland.jpeg";

const Gallery = () => {
  return (
    <div className="container">
      <Row xs={1} md={2} className="g-4 mt-5 py-4 px-3">
        <div className="d-flex justify-content-center align-items-center">
          <Col className="pe-3">
            <Card.Title className="text-secondary fw-bolder fs-3">
              GO AND SEE ALL <br /> YOU POSSIBLY CAN
            </Card.Title>
            <Card.Text className="text-muted">
              Tourism is the activities of people traveling <br /> to and
              staying in places outside their usual environment <br /> for
              leisure, business or other purposes for not more than one
              consecutive year.
            </Card.Text>
            <p className="fw-bold text-success cursor-link">
              Details <i className="fas fa-long-arrow-alt-right"></i>
            </p>
          </Col>
        </div>
        <Col className="parent">
          <Card.Img className="image1" variant="top" src={img1} />
          <Card.Img className="image2" variant="top" src={img2} />
          <Card.Img className="image3" variant="top" src={img3} />
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
