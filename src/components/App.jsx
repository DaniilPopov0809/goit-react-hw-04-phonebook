import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    const normalizateName = name.toLocaleLowerCase();
    const findName = contacts.filter(
      contact => contact.name.toLocaleLowerCase() === normalizateName
    );
    if (findName.length !== 0) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = { id: nanoid(), name, number };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizateFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizateFilter)
    );
  };

  onDeleteContact = contactIndex => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactIndex
      ),
    }));
  };

  componentDidMount() {
    const getLocalStorage = localStorage.getItem('constacts');

    if (getLocalStorage) {
      try {
        const state = JSON.parse(getLocalStorage);
        this.setState({ contacts: state });
      } catch (error) {
        alert('Oops! Error: ', error.message);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      console.log(contacts);
      localStorage.setItem('constacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactsForm onSubmit={this.formSubmit} />
          <h2>Contacts</h2>
          <Filter filter={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.onDeleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
