import { addContact } from '../../redux/opertions';
import css from '../Styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const namesContacts = useSelector(selectContacts).map(contact => contact.name);

    const updateStateForAdd = (evt) => {
        evt.preventDefault();
        const newName = evt.currentTarget.elements.name.value;
        
        if(!namesContacts.some(name => name.toLowerCase() === newName.toLowerCase())){
            const newNumb = evt.currentTarget.elements.number.value;
            const dataForAdd = {
                name: newName,
                phone: newNumb
            }
            dispatch(addContact(dataForAdd));
            evt.currentTarget.reset();
        } else{
            alert(`${newName} is already in contacts.`)
        }
        };

    return (
        <form className={css.form} onSubmit={updateStateForAdd}>
            <label className={css.label}>
                <span className={css.nameInput}>Name</span>
            <input className={css.input} type="text" name="name" required />
            </label>
            <label className={css.label}>
                <span className={css.nameInput}>Number</span>
                <input className={css.input} type="tel" name="number" required />
            </label>
            <button className={css.button} type="submit">Add contact</button>
        </form>
    )
};