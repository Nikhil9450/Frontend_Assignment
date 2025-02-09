import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, ListGroup, Carousel, Image, Container, Row, Col } from "react-bootstrap";
import './CarDetail.css'
import { Table } from 'react-bootstrap';
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
            <Table  bordered hover responsive>
                <tbody>
                    <tr>
                        <td className="spanHeaders">Model:</td>
                        <td>{car.model}</td>
                    </tr>
                    <tr>
                        <td className="spanHeaders">Make:</td>
                        <td>{car.make}</td>
                    </tr>
                    <tr>
                        <td className="spanHeaders">Engine:</td>
                        <td>{car.engine}</td>
                    </tr>
                    <tr>
                        <td className="spanHeaders">Features:</td>
                        <td>{car.features.join(", ")}</td>
                    </tr>
                    <tr>
                        <td className="spanHeaders">Color:</td>
                        <td>{car.color}</td>
                    </tr>
                    <tr>
                        <td className="spanHeaders">Price:</td>
                        <td>{car.price}</td>
                    </tr>
                    <tr>
                        <td className="spanHeaders">Year:</td>
                        <td>{car.year}</td>
                    </tr>
                    <tr>
                        <td className="spanHeaders">Mileage:</td>
                        <td>{car.mileage} km</td>
                    </tr>
                    <tr>
                        <td className="spanHeaders">Fuel Type:</td>
                        <td>{car.fuelType}</td>
                    </tr>
                    <tr>
                        <td className="spanHeaders">Transmission:</td>
                        <td>{car.transmission}</td>
                    </tr>
                    <tr>
                        <td className="spanHeaders">Horsepower:</td>
                        <td>{car.horsepower}</td>
                    </tr>
                    <tr>
                        <td className="spanHeaders">Owners:</td>
                        <td>{car.owners}</td>
                    </tr>
                </tbody>
            </Table>
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
