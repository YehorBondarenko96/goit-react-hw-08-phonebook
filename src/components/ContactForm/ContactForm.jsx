import { addContact } from '../../redux/opertions';
import css from './ContactForm.module.css';
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
                number: newNumb
            }
            dispatch(addContact(dataForAdd));
            evt.currentTarget.reset();
        } else{
            alert(`${newName} is already in contacts.`)
        }
        };

    return (
        <form className={css.formContactForm} onSubmit={updateStateForAdd}>
            <label className={css.labelContactForm}>
                <span className={css.nameInputContactForm}>Name</span>
            <input className={css.inputContactForm} type="text" name="name" required />
            </label>
            <label className={css.labelContactForm}>
                <span className={css.nameInputContactForm}>Number</span>
                <input className={css.inputContactForm} type="tel" name="number" required />
            </label>
            <button className={css.buttonContactForm} type="submit">Add contact</button>
        </form>
    )
};