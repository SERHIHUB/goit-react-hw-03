import { useState, useEffect } from "react";
import "./App.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const arreyContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedObject = window.localStorage.getItem("contacts");
    return savedObject !== null ? JSON.parse(savedObject) : arreyContacts;
  });

  const [nameValue, setNameValue] = useState("");

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameValue.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deletContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox inputValue={nameValue} handleChange={setNameValue} />
      <ContactList contactItem={filterContacts} onDelet={deletContact} />
    </>
  );
}

export default App;
