import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactListItem from './ContactListItem/ContactListItem';

import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul className={s.contactList}>
        {contacts.map(({ name, id, number }) => {
          return (
            <ContactListItem
              contact={name}
              number={number}
              key={id}
              onDeleteContact={() =>
                dispatch(contactsOperations.deleteContact(id))
              }
            />
          );
        })}
      </ul>
    </>
  );
}

export default ContactList;
