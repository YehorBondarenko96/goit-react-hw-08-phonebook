import css from "../Styles.module.css";
import { useSelector } from "react-redux";
import { ItemContact } from "components/ItemContact/ItemContact";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { useRef, useEffect } from "react";

export const UlForCL = () => {
    let contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const listContacts = useRef(null);

    if(filter.length > 0) {
        contacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    };

    useEffect(() => {
        const itemsContact = document.querySelectorAll('.itemContact');

        const forScroll = () => {
            itemsContact.forEach(item => readRectItem(item));
        };

        listContacts.current.addEventListener('scroll', forScroll);

        const autoScroll = (item, conditionForAutoSc = 0) => {
            itemsContact.forEach(i => i.classList.remove(css.itemContactActive));
                    item.classList.add(css.itemContactActive);
                    const scrollLForList = listContacts.current.scrollLeft;
                    listContacts.current.style.scrollBehavior = 'smooth';
                    if(conditionForAutoSc !== 0){
                        listContacts.current.scrollLeft = scrollLForList + conditionForAutoSc;
                    };

                    listContacts.current.removeEventListener('scroll', forScroll);
                    
                    setTimeout(() => {
                        if(listContacts.current){
                            listContacts.current.addEventListener('scroll', forScroll);
                        }
                    }, 250);
        };

        itemsContact.forEach(item => item.addEventListener('click', () => {
            const rectItem = item.getBoundingClientRect();
            const rectListContacts = listContacts.current.getBoundingClientRect();
            if(rectItem.x < rectListContacts.x + rectListContacts.width/2) {
                const conditionForAutoSc = 0 - rectListContacts.width/2 + rectItem.x + 280;
                autoScroll(item, conditionForAutoSc);
            } else {
                const conditionForAutoSc = 0  - rectListContacts.width/2 + rectItem.x + 80;
                autoScroll(item, conditionForAutoSc);
            }
        }));

        const readRectItem = (item) => {
            const rectItem = item.getBoundingClientRect();
            const rectListContacts = listContacts.current.getBoundingClientRect();
            const startActive = rectListContacts.x + rectListContacts.width/2 - rectItem.width/2 - 200;
            const secondStAct = rectListContacts.x + rectListContacts.width/2 + rectItem.width/2 - 200;
            if(rectItem.x > startActive && 
                rectItem.x < rectListContacts.x + rectListContacts.width/2 &&
                !item.classList.contains(css.itemContactActive)){
                    const conditionForAutoSc = 0 - rectItem.width/2 + 200;
                autoScroll(item, conditionForAutoSc);
            } else if(rectItem.x > rectListContacts.x + rectListContacts.width/2 && 
                rectItem.x < secondStAct &&
                !item.classList.contains(css.itemContactActive)){
                    const conditionForAutoSc = 0 + rectItem.width/2 - 100;
                    autoScroll(item, conditionForAutoSc);
                }
        };
    }, [contacts]);

    return(
        <ul ref={listContacts} className={css.listContacts}>
            {contacts.length !== 0 &&
                contacts.map((contact, index) => { 
                    
                    return(
                    <li key={contact.id} className={[css.itemContact, 'itemContact'].join(' ')}>
                    <ItemContact 
                        contact={contact}
                        index={contacts.indexOf(contact)}
                        key={contact.id}
                    />
                    </li>
                )})
            }
        </ul>
    )
};