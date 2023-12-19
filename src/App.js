import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import AddContact from './components/addContact';
import ContactList from './components/contactList';
import Header from './components/header';





function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const[contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);


  const addContactHandler = (contact)=>{
    console.log(contact)
    setContacts([...contacts, {id: uuid(), ...contact}])
  }
  
  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id!== id;
    });
    setContacts(newContactList)
  };


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])




  return (
    <div className="ui container">
      <Header ></Header>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} removeContactHandler={removeContactHandler}/>
    </div>
  );
}

export default App;
