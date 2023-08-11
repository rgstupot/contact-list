import { Contact } from "./Contact";

export function ContactList({ contacts, handleDeleteContact }) {
  return (
    <div className="d-flex p-2">
      {contacts.map((contact) => (
        <div className="d-flex p-2" key={contact.id}>
          <Contact
            contact={contact}
            handleDeleteContact={handleDeleteContact}
          />
        </div>
      ))}
    </div>
  );
}
