import React from 'react';
import { useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import useLocalStorage from 'hooks/useLocalStorage';
import { Container } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const formSubmit = (name, number) => {
    const normalizateName = name.toLocaleLowerCase();
    const findName = contacts.filter(
      contact => contact.name.toLocaleLowerCase() === normalizateName
    );
    if (findName.length !== 0) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = { id: nanoid(), name, number };

      setContacts(prevState => [...prevState, contact]);
    }
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  },  [filter, contacts]);


  const onDeleteContact = contactIndex => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactIndex)
    );
  };

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={formSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={changeFilter} />
        <ContactsList
          contacts={getVisibleContacts}
          onDeleteContact={onDeleteContact}
        />
      </Container>
    </>
  );
}
