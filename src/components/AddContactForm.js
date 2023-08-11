import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { states } from "../data/States";
import { useState } from "react";

export function AddContactForm({ handleAddContact }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName && !lastName) return;

    const id = crypto.randomUUID();

    const newContact = {
      id,
      firstName,
      lastName,
      phone,
      email,
      address,
      city,
      state,
      zip,
    };

    handleAddContact(newContact);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");
  }

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Add a Contact</Accordion.Header>
          <Accordion.Body>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="555-555-5555"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>State</Form.Label>
                  <Form.Select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    {states.map((state) => (
                      <option key={state.name}>{state.abbreviation}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    pattern="[0-9]{5}"
                    placeholder="12345"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Add Contact
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
