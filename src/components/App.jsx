import { nanoid } from "nanoid";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout/Layout";
import { Filter } from "./Phonebook/Filter/Filter";
import {PhoneForm} from "./Phonebook/PhoneForm";
import { PhoneList } from "./Phonebook/PhoneList/PhoneList";
import {Phonebook, Contacts} from './App.style'
import { useState, useEffect  } from "react";


const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  return initialContacts;
};


export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  

  const addContact = data => {
    const dublicate = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (dublicate) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    
      const { name, number } = data;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      
        setContacts(prevState => [...prevState, newContact])
      };
    
  

  const removeContact = id => {
    setContacts(contacts.filter(item => item.id !== id),
      );
  };



  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
  }
   const filterValue = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });
    return filteredContacts;
    };

    const handleFilter = e => {
      setFilter(e.target.value)
    };
  
    const contactsVisible = getFilteredContacts();
  return (
    <Layout>
<Phonebook>Phonebook</Phonebook>
<PhoneForm onSubmit={addContact} />

<Contacts>Contacts</Contacts>
<Filter handleFilter={handleFilter} valueFilter={filter} />

<PhoneList contacts={contactsVisible} removeContact={removeContact}/>

      <GlobalStyle/>
    </Layout>
  );
  };

