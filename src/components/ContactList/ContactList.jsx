import css from '../Styles.module.css';
import { ItemContact } from 'components/ItemContact/ItemContact';
import { selectContacts, selectFilter, selectIsLoading, selectError } from '../../redux/selectors';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/opertions";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { backgroundImg } from '../../redux/selectors';
import { searchForBackground } from '../../redux/searchForStyles';

export const ContactList = () => {
    let contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const imgForBackground = useSelector(backgroundImg);

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);


    useEffect(() => {
        dispatch(fetchContacts());
        dispatch(searchForBackground());
    }, [dispatch]);

    if(filter.length > 0) {
                contacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
            }

    return(
        <div className={css.divForContactList} 
        style={{
            backgroundImage: `url(${imgForBackground})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            }}>
            {error && <h2>Oopsss...Something went wrong...</h2>}
            {isLoading && !error ? <Loader /> : (
                    <ul className={css.listContacts}>
                {contacts.length !== 0 &&
                contacts.map((contact) => (
                        <ItemContact 
                    key={contact.id}
                    contact={contact}
                    />
                ))
                }
                </ul>
            )}
            {error && contacts.length > 0 && <h2>Oopsss...Something went wrong...</h2>}
        </div>
    )
}