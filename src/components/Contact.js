import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export function Contact({ contact, handleDeleteContact }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {contact.firstName} {contact.lastName}
        </Card.Title>
        <Card.Text>
          {contact.address && contact.address}
          <br />
          {contact.city && `${contact.city},`} {contact.state && contact.state}{" "}
          {contact.zip && contact.state}
        </Card.Text>
        <p>
          Phone:{" "}
          <Card.Link href={`tel:${contact.phone}`}>{contact.phone}</Card.Link>
          <br />
          Email:{" "}
          <Card.Link href={`mailto:${contact.email}`}>
            {contact.email}
          </Card.Link>
        </p>
        <Button
          variant="danger"
          onClick={() => handleDeleteContact(contact.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
