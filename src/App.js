import React, { useState } from 'react';
import './App.css';
import AddContact from './components/addContact';
import ContactList from './components/contactList';
import Header from './components/header';
function App() {
  const[contacts, setContacts] = useState([]);
  const addContactHandler = (contact)=>{
    console.log(contact)
  }
  return (
    <div className="ui container">
      <Header ></Header>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
