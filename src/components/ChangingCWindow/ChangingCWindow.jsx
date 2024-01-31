import css from './ChangingCWindow.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { patchContact } from '../../redux/opertions';
import { setScrollLeftLists } from '../../redux/contactsSlice';

export const ChangingCWindow = ({closeChangingCWindow, name, number, id, actualScroll}) => {
    const dispatch = useDispatch();
    const namesContacts = useSelector(selectContacts).map(contact => contact.name);

    const updateStateForPatch = (evt) => {
        evt.preventDefault();
        const newName = evt.currentTarget.elements.name.value;
        
        if(!namesContacts.some(name => name.toLowerCase() === newName.toLowerCase())){
            const idContact = id;
            const newNumb = evt.currentTarget.elements.number.value;
            const dataForPatch = {
                id: idContact,
                name: newName,
                number: newNumb
            }
            dispatch(patchContact(dataForPatch));
            evt.currentTarget.reset();
            dispatch(setScrollLeftLists(actualScroll));
        } else{
            alert(`${newName} is already in contacts.`)
        }
        };
    return(
            <form className={css.formChangingCWindow} onSubmit={updateStateForPatch}>
                <label className={css.labelChangingCWindow}>
                    <span className={css.nameInputChangingCWindow}>Name</span>
                <input className={css.inputChangingCWindow} 
                defaultValue={name}
                type="text" 
                name="name" 
                required 
                />
                </label>
                <label className={css.labelChangingCWindow}>
                        <span className={css.nameInputChangingCWindow}>Number</span>
                    <input className={css.inputChangingCWindow}
                    defaultValue={number}
                    type="tel"
                    name="number" 
                    required 
                    />
                </label>
                <div className={css.buttonsChangingCWindow}>
                <button className={css.buttonChangingCWindow} type="button" onClick={closeChangingCWindow}>Changen't contact</button>
                <button className={css.buttonChangingCWindow} type="submit">Change contact</button>
                </div>
            </form>
    )
};