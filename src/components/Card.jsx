import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
import  './Card.css';
function CardsForCar({carDetails}) {
    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate("/car-details", { state: { car: carDetails } });
    };

  return (
    <Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={carDetails.image[0]} />
      <Card.Body className="text-start">
        <Card.Title style={{fontSize:"1rem"}}>{carDetails.make}</Card.Title>
            <ListGroup>
                <ListGroup.Item className='listItem' >Model -<span className='listItemValue'>{carDetails.model}</span></ListGroup.Item>
                <ListGroup.Item className='listItem' >Color -<span className='listItemValue'>{carDetails.color}</span></ListGroup.Item>
                <ListGroup.Item className='listItem' >Price -<span className='listItemValue'>{carDetails.price}</span></ListGroup.Item>
                <ListGroup.Item className='listItem' >Year  -<span className='listItemValue'>{carDetails.year}</span></ListGroup.Item>

            </ListGroup>
        <Button variant="outline-primary" size="sm" style={{marginTop:"1rem"}} onClick={handleShowDetails}>Show More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CardsForCar;