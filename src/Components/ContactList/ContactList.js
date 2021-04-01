import { useSelector, useDispatch } from 'react-redux';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import ContactListItem from './ContactListItem/ContactListItem';

import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul className={s.contactList}>
        <TransitionGroup>
        {contacts.map(({ name, id, number }) => (
            <CSSTransition  
            key={id}
            timeout={250}
            classNames={s}>
            <ContactListItem
              contact={name}
              number={number}
              key={id}
              onDeleteContact={() =>
                dispatch(contactsOperations.deleteContact(id))
              }
            />
          </CSSTransition>
        ))}
        </TransitionGroup>
      </ul>
    </>
  );
}

export default ContactList;
