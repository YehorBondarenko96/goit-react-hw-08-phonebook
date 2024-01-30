import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/workWithBackend/selectors';
import css from './PageUsers.module.css';

const PageUsers = () => {
    const token = useSelector(selectToken);
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    return(
        <>
        <div className={css.divContFiltPageUsers}>
        <Filter />
        <ContactForm />
        </div>
        <ContactList />
        </>
    )
};

export default PageUsers;