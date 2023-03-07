import { nanoid } from "nanoid";
import React, {Component} from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import { Filter } from "./Phonebook/Filter/Filter";
import {PhoneForm} from "./Phonebook/PhoneForm";
import { PhoneList } from "./Phonebook/PhoneList/PhoneList";
import {Phonebook, Contacts} from './App.style'


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

  addContact = data => {
    const { contacts } = this.state;
    const dublicate = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (dublicate) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    this.setState(prevState => {
      const { contacts } = prevState;
      const { name, number } = data;
      const newContact = {
        name,
        number,
        id: nanoid(),
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(item => item.id !== id),
      };
    });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    
    if (!filter) {
      return contacts;
    }
    const filterValue = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });
    return filteredContacts;
  };

  handleFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });

  };
componentDidMount(){
  const contacts = localStorage.getItem('contacts');
  const parselContacts = JSON.parse(contacts);
  if(parselContacts){
  this.setState({contacts: parselContacts})
  }
};

  componentDidUpdate(prevProps, prevState){
    if (this.state.contacts !== prevState.contacts);
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    };


  render() {
    const { handleFilter, removeContact, addContact } = this;
    const contacts = this.getFilteredContacts();
  return (
    <Layout>
<Phonebook>Phonebook</Phonebook>
<PhoneForm onSubmit={addContact} />

<Contacts>Contacts</Contacts>
<Filter handleFilter={handleFilter} />

<PhoneList contacts={contacts} removeContact={removeContact}/>

      <GlobalStyle/>
    </Layout>
  );
}
}

export default App;