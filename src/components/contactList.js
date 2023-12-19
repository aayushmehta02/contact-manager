
import CardContact from './contactCard';


import React from 'react';

 const ContactList = (props) => {
    const deleteContactHandler = (id)=>{
        props.removeContactHandler(id);
    };
    const renderContactList = props.contacts.map((contact) =>{
        return(
           
            <CardContact contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        )
    })
   
  return (
    <div className='ui celled list ' >{renderContactList}</div>
  )
};



export default ContactList;