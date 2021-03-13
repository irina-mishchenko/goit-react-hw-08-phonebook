import propTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './ContactListItem.module.css';

const ContactListItem = ({ contact, number, onDeleteContact, id }) => {
  return (
    <li className={s.contactListItem}>
      <p className={s.contact}>
        {contact}: {number}
      </p>

      <Button variant="danger" onClick={() => onDeleteContact(id)}>Delete</Button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default ContactListItem;