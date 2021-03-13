import ContactForm from './../Components/ContactForm/ContactForm';
import ContactList from './../Components/ContactList/ContactList';
import Filter from './../Components/Filter/Filter';

export default function ContactsView() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
