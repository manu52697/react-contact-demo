import React, { useState } from 'react';
import Contact from '../../models/contact';
import ContactComponent from '../pure/contactComponent';

import '../../styles/contact-list.css';
import ContactForm from '../forms/contactForm';


const ContactList = () => {


    const defaultContact = new Contact('John', false);
    const [contacts, setContacts] = useState([defaultContact,]);

    function removeContact(contact){
        const tempContacts = copyContacts();
        const index = contacts.indexOf(contact);
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    function addContact(contact){
        const tempContacts = copyContacts();
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    function changeContactStatus(contact){
        const tempContacts = copyContacts();
        const index = contacts.indexOf(contact);
        tempContacts[index].status = !tempContacts[index].status
        setContacts(tempContacts);
    }

    function copyContacts(){
        return [...contacts];
    }


    return (
        <div className='contact-list'>
            <table className='table table-hover contact-table'>
                
                <thead>
                <tr>
                    <th colSpan={3} scope='col'>Contacts</th>
                </tr>
                </thead>

                <tbody>
                {contacts.map(contact => {
                    return (
                    <ContactComponent 
                    contact={contact} 
                    key={contacts.indexOf(contact)} 
                    changeStatus={changeContactStatus}
                    remove={removeContact}
                    ></ContactComponent>
                    )
                })
                }
                </tbody>
            </table>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
};

export default ContactList;
