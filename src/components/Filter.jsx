import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
const Filter = ({ make, model, year, onApplyFilter }) => {
  const [filters, setFilters] = useState({make: "",model: "",year: "",priceSort: "",dateSort: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFilters({
      make: "",
      model: "",
      year: "",
      priceSort: "",
      dateSort: "",
    });
  };

  const handleApply = () => {
    console.log("filters--------------->", filters);
    onApplyFilter(filters);
  };

  return (
      <Row className="g-2">
      
        <Col xs={12} sm={6} md={2}>
          <Form.Select name="make" value={filters.make} onChange={handleChange} size="sm">
            <option value="">Make</option>
            {make.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col xs={12} sm={6} md={2}>
          <Form.Select name="model" value={filters.model} onChange={handleChange} size="sm">
            <option value="">Model</option>
            {model.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col xs={12} sm={6} md={2}>
          <Form.Select name="year" value={filters.year} onChange={handleChange} size="sm">
            <option value="">Year</option>
            {year.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col xs={12} sm={6} md={2}>
          <Form.Select name="priceSort" value={filters.priceSort} onChange={handleChange} size="sm">
            <option value="">Sort by Price</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </Form.Select>
        </Col>

        <Col xs={12} sm={6} md={2}>
          <Form.Select name="dateSort" value={filters.dateSort} onChange={handleChange} size="sm">
            <option value="">Sort by Date</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </Form.Select>
        </Col>

        <Col xs={12} sm={6} md={2}>
            <ButtonGroup className="w-100">
                <Button variant="outline-secondary" size="sm" onClick={handleClear}>
                    Clear Filter
                </Button>
                <Button variant="primary" size="sm" onClick={handleApply}>
                    Apply Filter
                </Button>
            </ButtonGroup>
        </Col>

      </Row>
    // </div>
  );
};

export default Filter;
