import { addContact } from '../../redux/opertions';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
// import { click } from '@testing-library/user-event/dist/click';

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

        function forAddButton(){
            const modalDivContactForm = document.querySelector('.modalDivContactForm');
            const firstDivContactForm = document.querySelector('.firstDivContactForm');

            modalDivContactForm.classList.add(css.modalDivContactFormActive);
            firstDivContactForm.classList.add(css.firstDivContactFormActive);

            const removeClasses = (e) => {
                if (e.target.classList.contains(css.modalDivContactFormActive)){
                modalDivContactForm.removeEventListener('click', removeClasses);
                modalDivContactForm.classList.remove(css.modalDivContactFormActive);
                firstDivContactForm.classList.remove(css.firstDivContactFormActive);
                };
            };

            modalDivContactForm.addEventListener('click', removeClasses)
        };

    return (
        <div className={[css.modalDivContactForm, 'modalDivContactForm'].join(' ')}>
            <div className={[css.firstDivContactForm, 'firstDivContactForm'].join(' ')}
        style={{
            // backgroundImage: `url(${img || reservedImg})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            }}>
                <div className={css.divForMiniContactForm}>
                    <button className={css.buttonAddMiniContactForm} type='button' onClick={forAddButton}>
                        Add
                    </button>
                    </div>
                <div className={css.divContactForm}>

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
                </div>
        </div>
        </div>
    )
};