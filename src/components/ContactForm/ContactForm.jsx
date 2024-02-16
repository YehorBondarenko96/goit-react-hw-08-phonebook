import { addContact } from '../../redux/opertions';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { useEffect } from 'react';

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
            removeClasses();
        } else{
            alert(`${newName} is already in contacts.`)
        }
        };

        function forAddButton(){
            const modalDivContactForm = document.querySelector('.modalDivContactForm');
            const firstDivContactForm = document.querySelector('.firstDivContactForm');
            const inputNameAdd = document.querySelector('.inputNameAdd');

            modalDivContactForm.classList.add(css.modalDivContactFormActive);
            firstDivContactForm.classList.add(css.firstDivContactFormActive);
            
            setTimeout(() => {
                inputNameAdd.focus();
            }, 100);

            modalDivContactForm.addEventListener('click', removeClasses);
            document.addEventListener('keydown', closeModalForEsc);
        };

        const closeModalForEsc = (e) => {
            if(e.key === 'Escape'){
                removeClasses();
            }
        };

        const removeClasses = (e) => {
            const modalDivContactForm = document.querySelector('.modalDivContactForm');
            const firstDivContactForm = document.querySelector('.firstDivContactForm');
            const inputsAdd = document.querySelectorAll('.inputsAdd');

            function workRC(){
                modalDivContactForm.removeEventListener('click', removeClasses);
                document.removeEventListener('keydown', closeModalForEsc);
                inputsAdd.forEach(input => input.blur());
                modalDivContactForm.classList.remove(css.modalDivContactFormActive);
                firstDivContactForm.classList.remove(css.firstDivContactFormActive);
            };

            if(e){
            if (e.target.classList.contains(css.modalDivContactFormActive)){
            workRC();
            };
        } else{
            workRC();
        }
        };

        useEffect(() => {
            const divForMiniContactForm = document.querySelector('.divForMiniContactForm');
            const firstDivContactForm = document.querySelector('.firstDivContactForm');
            const labelFilter = document.querySelector('.labelFilter');

            const forHoverEnter = () => {
                firstDivContactForm.classList.add(css.divForMiniContactFormHover);
                if(labelFilter){
                    labelFilter.style.marginRight = '155px';
                };
            };
            const forHoverLeave = () => {
                firstDivContactForm.classList.remove(css.divForMiniContactFormHover);
                if(labelFilter){
                    labelFilter.style.marginRight = '130px';
                };
            };

            divForMiniContactForm.addEventListener('mouseenter', forHoverEnter);
            divForMiniContactForm.addEventListener('mouseleave', forHoverLeave);
        });

    return (
        <div className={[css.modalDivContactForm, 'modalDivContactForm'].join(' ')}>
            <div className={[css.firstDivContactForm, 'firstDivContactForm'].join(' ')}>
                <div className={[css.divForMiniContactForm, 'divForMiniContactForm'].join(' ')}>
                    <button className={css.buttonAddMiniContactForm} type='button' onClick={forAddButton}>
                        Add
                    </button>
                    </div>
                <div className={css.divContactForm}>

                <form className={css.formContactForm} onSubmit={updateStateForAdd}>
            <label className={css.labelContactForm}>
                <span className={css.nameInputContactForm}>Name</span>
            <input className={[css.inputContactForm,'inputNameAdd', 'inputsAdd'].join(' ')} type="text" name="name" required/>
            </label>
            <label className={css.labelContactForm}>
                <span className={css.nameInputContactForm}>Number</span>
                <input className={[css.inputContactForm, 'inputsAdd'].join(' ')} type="tel" name="number" required />
            </label>
            <button className={css.buttonContactForm} type="submit">Add contact</button>
        </form>
                </div>
        </div>
        </div>
    )
};