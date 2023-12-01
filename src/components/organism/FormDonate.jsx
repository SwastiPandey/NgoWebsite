import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const FormDonate = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container p-4">
      <Card style={{ width: "300px", margin: "auto" }}>
        <Card.Body>
          <Card.Title>Donate Form</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", marginTop: "20px" }}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormDonate;
