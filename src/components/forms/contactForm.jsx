import React, { useRef } from 'react';
import Contact from '../../models/contact';
import PropTypes from 'prop-types';

const ContactForm = ({add}) => {

    const nameRef = useRef('');

    function addContact(e){
        e.preventDefault();
        let newContact = new Contact(nameRef.current.value, false)
        add(newContact);
    }

    return (
        <form onSubmit={addContact}>
            <label className='visually-hidden' htmlFor='inputName'>Enter name</label>
            <input 
            id='inputName'
            type='text'
            placeholder='Enter Name'
            ref={nameRef}
            ></input>
            <button type='submit' className='btn btn-success'>
            <i className="bi bi-plus-circle-fill"></i> Add
            </button>

        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default ContactForm;
