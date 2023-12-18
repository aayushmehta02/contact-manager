
import CardContact from './contactCard';


import React from 'react';

 const ContactList = (props) => {
    
    const renderContactList = props.contacts.map((contact) =>{
        return(
           
            <CardContact contact={contact}/>
        )
    })
  return (
    <div className='ui celled list '>{renderContactList}</div>
  )
};



export default ContactList;