import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, ListGroup, Carousel, Image, Container, Row, Col } from "react-bootstrap";
import './CarDetail.css'
const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  if (!car) {
    return <p className="text-center text-danger">No car details available.</p>;
  }

  return (
    <Container className="mt-4">
      <Card className="p-3">
        <Row style={{alignItems:'center'}}>
          {/* Image Section */}
          <Col md={6}>
          <Card.Title className="text-primary fs-3 fw-bold" style={{marginBottom:'1.5rem'}}>{car.make} {car.model}</Card.Title>
            <Carousel>
              {car.image.map((img, index) => (
                <Carousel.Item key={index}>
                  <Image src={img} fluid className="rounded" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          <Col md={6} className="d-flex flex-column justify-content-center">
            <Card.Body className="text-start">
                <ListGroup variant="flush">
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Model:</span> {car.model}</ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Make:</span> {car.make}</ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Engine:</span> {car.engine}</ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Features:</span> {car.features.join(" , ")}</ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Color:</span> {car.color}</ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Price:</span> ${car.price}</ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Year:</span> {car.year}</ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Mileage:</span> {car.mileage} km</ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Fuel Type:</span> {car.fuelType}</ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Transmission:</span> {car.transmission}</ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Horsepower:</span> {car.horsepower}</ListGroup.Item>
                    <ListGroup.Item className="listGroupItem" ><span className="spanHeaders">Owners:</span> {car.owners}</ListGroup.Item>
              </ListGroup>
              <Button 
                variant="outline-primary" 
                size="md" 
                className="mt-3 w-100" 
                onClick={() => navigate(-1)}
              >
                Go Back To Home Page
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CarDetails;
