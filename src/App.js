import { Title } from "./components/Title";
import { AddContactForm } from "./components/AddContactForm";
import { ContactList } from "./components/ContactList";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState([]);

  function handleAddContact(contact) {
    setContacts((contacts) => [...contacts, contact]);
  }

  function handleDeleteContact(id) {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  }

  return (
    <div>
      <Title />
      <AddContactForm handleAddContact={handleAddContact} />
      {contacts.length > 0 ? (
        <ContactList
          contacts={contacts}
          handleDeleteContact={handleDeleteContact}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
