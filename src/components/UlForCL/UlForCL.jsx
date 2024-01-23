import css from "../Styles.module.css";
import { useSelector } from "react-redux";
import { ItemContact } from "components/ItemContact/ItemContact";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { useRef, useEffect } from "react";

export const UlForCL = () => {
    let contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const listContacts = useRef(null);
    const itemContact = useRef([]);

    if(filter.length > 0) {
        contacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    };

    const readRectItem = (item) => {
        const rectItem = item.getBoundingClientRect();
        const rectListContacts = listContacts.current.getBoundingClientRect();
        const diffPositionX = Math.abs(rectListContacts.x - rectItem.x);
        const ourConst = Math.abs(rectListContacts.width/2 - rectItem.width);
        const condition = Math.abs(ourConst - diffPositionX);
        if(condition < 500){
            item.classList.add(css.itemContactActive);
        } else {
            item.classList.remove(css.itemContactActive);
        }
    };

    useEffect(() => {
        const itemsContact = document.querySelectorAll('.itemContact');

        const forScroll = () => {
            itemsContact.forEach(item => readRectItem(item));
        };

        listContacts.current.addEventListener('scroll', forScroll);
    }, [contacts]);

    return(
        <ul ref={listContacts} className={css.listContacts}>
            {contacts.length !== 0 &&
                contacts.map((contact, index) => { 
                    
                    return(
                    <li ref={itemContact[index]} key={contact.id} className={[css.itemContact, 'itemContact'].join(' ')}>
                    <ItemContact 
                        contact={contact}
                        index={contacts.indexOf(contact)}
                        readRectItem={readRectItem}
                        key={contact.id}
                    />
                    </li>
                )})
            }
        </ul>
    )
};