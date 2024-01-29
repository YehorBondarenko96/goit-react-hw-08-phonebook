import css from '../Styles.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/workWithBackend/selectors';

const PageUsers = () => {
    const token = useSelector(selectToken);
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
    return(
        <>
        <h1 className={css.phonebook}>Phonebook</h1>
  <ContactForm />

  <h2 className={css.contacts}>Contacts</h2>
  <Filter />
  <ContactList />
        </>
    )
};

export default PageUsers;