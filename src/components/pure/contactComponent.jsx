import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../../models/contact';

import '../../styles/contact.css';

const ContactComponent = ({contact, changeStatus, remove}) => {


    const onlineStatus = contact.status ? 'contact-online' : 'contact-offline';

    return (
        <tr className='contact'>
            <td>{contact.name}</td>
            <td> <i onClick={() => changeStatus(contact)} className={ ('bi bi-circle-fill ' + onlineStatus) }/> </td>
            <td> <i onClick={() => remove(contact)} className="bi bi-trash-fill contact-trash" /></td>
        </tr>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
}

export default ContactComponent;
