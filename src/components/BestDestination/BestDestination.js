import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import destination1 from "../../images/destination/malaysia.jpeg";
import flag1 from "../../images/destination/malaysia_flag.png";
import destination2 from "../../images/destination/kashmir.jpg";
import flag2 from "../../images/destination/pakistan_flag.jpg";
import destination3 from "../../images/destination/bangkok.jpg";
import flag3 from "../../images/destination/thailand_flag.png";
import destination4 from "../../images/destination/bali.jpg";
import flag4 from "../../images/destination/flag_indonesia.jpg";
import destination5 from "../../images/destination/swiss.jpg";
import flag5 from "../../images/destination/swiss_flag.jpg";

const BestDestination = () => {
      const { user } = useAuth();

  const imgStyle = {
    width: "40px",
    marginLeft: "10px"
  };
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="text-success">Where to next, {user?.displayName}?</h1>
        <h5 className="text-secondary">
          Find exclusive discount in every corner of the world!
        </h5>
      </div>
      <Row xs={1} md={2} className="g-3 mt-3">
        <Col>
          <Card className="bg-white text-dark h-100">
            <Card.Img
              src={destination1}
              className="img-fluid h-100"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title className="fw-bold fs-3 d-inline-block">
                Kuala Lumpur
                <Card.Img
                  src={flag1}
                  style={imgStyle}
                  className="img-fluid"
                  alt="Card image"
                />
              </Card.Title>
              <Card.Text>4,224 properties</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="bg-white text-dark h-100">
            <Card.Img
              src={destination2}
              className="img-fluid h-100"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title className="fw-bold fs-3 d-inline-block">
                Kashmir
                <Card.Img
                  src={flag2}
                  style={imgStyle}
                  className="img-fluid"
                  alt="Card image"
                />
              </Card.Title>
              <Card.Text>4,994 properties</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-3 mt-1">
        <Col>
          <Card className="bg-white text-dark h-100">
            <Card.Img
              src={destination3}
              className="img-fluid h-100"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title className="fw-bold fs-3 d-inline-block">
                Bangkok
                <Card.Img
                  src={flag3}
                  style={imgStyle}
                  className="img-fluid"
                  alt="Card image"
                />
              </Card.Title>
              <Card.Text>4,224 properties</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="bg-white text-dark h-100">
            <Card.Img
              src={destination4}
              className="img-fluid h-100"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title className="fw-bold fs-3 d-inline-block">
                Bali
                <Card.Img
                  src={flag4}
                  style={imgStyle}
                  className="img-fluid"
                  alt="Card image"
                />
              </Card.Title>
              <Card.Text>4,994 properties</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="bg-white text-dark h-100">
            <Card.Img
              src={destination5}
              className="img-fluid h-100"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title className="fw-bold fs-3 d-inline-block">
                Swiss Alps
                <Card.Img
                  src={flag5}
                  style={imgStyle}
                  className="img-fluid"
                  alt="Card image"
                />
              </Card.Title>
              <Card.Text>4,994 properties</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BestDestination;
