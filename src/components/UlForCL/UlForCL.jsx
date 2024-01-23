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

    useEffect(() => {
        const itemsContact = document.querySelectorAll('.itemContact');

        const readRectItem = (item) => {
            const rectItem = item.getBoundingClientRect();
            const rectListContacts = listContacts.current.getBoundingClientRect();
            // const diffPositionX = rectListContacts.x - rectItem.x;
            // const ourConst = Math.abs(rectListContacts.width/2 - rectItem.width); //139
            // const condition = Math.abs(ourConst - diffPositionX);
            const startActive = rectListContacts.x + rectListContacts.width/2 - rectItem.width/2 - 100;
            const secondStAct = rectListContacts.x + rectListContacts.width/2 + rectItem.width/2 - 100;
            // const intervalStAc = 
            // const finishedActive = rectListContacts.x + rectListContacts.width/2 + rectItem.width/2;
            if(rectItem.x > startActive && 
                rectItem.x < rectListContacts.x + rectListContacts.width/2 &&
                !item.classList.contains(css.itemContactActive)){
                    console.log(1);
                // console.log('rectItem.x: ', rectItem.x);
                // console.log('startActive: ', startActive);
                // console.log(rectListContacts);
                // console.log(rectItem);
                // console.log(ourConst);
                // console.log(condition);
                itemsContact.forEach(i => i.classList.remove(css.itemContactActive));
                item.classList.add(css.itemContactActive);
                const scrollLForList = listContacts.current.scrollLeft;
                listContacts.current.style.scrollBehavior = 'smooth';
                listContacts.current.scrollLeft = scrollLForList;

                // setTimeout(() => {
                //     listContacts.current.style.scrollBehavior = 'auto';
                //   }, 1000);
            } else if(rectItem.x > rectListContacts.x + rectListContacts.width/2 && 
                rectItem.x < secondStAct &&
                !item.classList.contains(css.itemContactActive)){
                    console.log(2);
                    itemsContact.forEach(i => i.classList.remove(css.itemContactActive));
                    item.classList.add(css.itemContactActive);
                    const scrollLForList = listContacts.current.scrollLeft;
                    listContacts.current.style.scrollBehavior = 'smooth';
                    listContacts.current.scrollLeft = scrollLForList + rectItem.width/2;
                }
            // else {
            //     item.classList.remove(css.itemContactActive);
            // }
        };

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
                        key={contact.id}
                    />
                    </li>
                )})
            }
        </ul>
    )
};