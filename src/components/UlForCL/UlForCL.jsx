import css from "../Styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ItemContact } from "components/ItemContact/ItemContact";
import { selectContacts, selectFilter, selectScrollLeftLists } from "../../redux/selectors";
import { useRef, useEffect, useState } from "react";
import { setScrollLeftLists } from "../../redux/contactsSlice";

export const UlForCL = () => {
    const dispatch = useDispatch();
    let contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const scrollLeftLists = useSelector(selectScrollLeftLists);

    const [activeId, setActiveId] = useState(null);
    const [actualScroll, setActualScroll] = useState(0);
    const [listContHasEL, setListContHasEL] = useState(false);

    const listContacts = useRef(null);
    const listContactsRef = listContacts.current;

    useEffect(() => {
        if(scrollLeftLists > 0){
            if(listContacts.current){
                listContacts.current.scrollLeft = scrollLeftLists + 50;
                dispatch(setScrollLeftLists(0));
            }
        }
    });

    if(filter.length > 0) {
        contacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    };

    useEffect(() => {
        const itemsContact = document.querySelectorAll('.itemContact');
        const listContactsForGap = document.querySelector('.listContactsForGap');
        const coef = 2;
        const screenWidth = window.innerWidth;
        itemsContact.forEach(i => {
            i.style.minWidth = screenWidth/coef + 'px';
            i.style.height = screenWidth/(coef * 1.667) + 'px';
            i.style.fontSize = screenWidth/(coef * 19) + 'px'; 
            i.style.borderRadius = screenWidth/(coef * 22) + 'px';
        });
        listContactsForGap.style.gap = screenWidth/(coef * 10) + 'px';

        const forScroll = () => {
            setActualScroll(listContacts.current.scrollLeft);
            itemsContact.forEach(item => readRectItem(item));
        };

        if(!listContHasEL && listContacts.current){
            setListContHasEL(true);
            listContacts.current.removeEventListener('scroll', forScroll);
            listContacts.current.addEventListener('scroll', forScroll);
        };

        const autoScroll = (item, conditionForAutoSc = 0) => {
            itemsContact.forEach(i => {
                i.style.minWidth = screenWidth/coef + 'px';
                i.style.height = screenWidth/(coef * 1.667) + 'px';
                i.style.fontSize = screenWidth/(coef * 19) + 'px'; 
                i.style.borderRadius = screenWidth/(coef * 22) + 'px';
                i.classList.remove(css.itemContactActive);
            });
                    item.style.minWidth = screenWidth/coef * 1.4 + 'px';
                    item.style.height = screenWidth/(coef * 1.667) * 1.4 + 'px';
                    item.style.fontSize = screenWidth/(coef * 19) * 1.4 + 'px'; 
                    item.style.borderRadius = screenWidth/(coef * 22) * 1.4 + 'px';
                    item.classList.add(css.itemContactActive);
                    setActiveId(item.getAttribute('id'));
                    const scrollLForList = listContacts.current.scrollLeft;
                    listContacts.current.style.scrollBehavior = 'smooth';
                    if(conditionForAutoSc !== 0){
                        listContacts.current.scrollLeft = scrollLForList + conditionForAutoSc;
                    };

                    listContacts.current.removeEventListener('scroll', forScroll);
                    listContacts.current.removeEventListener('scroll', forScroll);
                    
                    setTimeout(() => {
                        if(listContacts.current){
                            listContacts.current.addEventListener('scroll', forScroll);
                        }
                    }, 1000);
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
            const startActive = rectListContacts.x + rectListContacts.width/2 - rectItem.width/2 + 50 - 270;
            const secondStAct = rectListContacts.x + rectListContacts.width/2 + rectItem.width/2 - 50 - 270;
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

        return () => {
            if(listContactsRef){
                listContactsRef.removeEventListener('scroll', forScroll);
            }
        }
    }, [contacts, listContHasEL, listContactsRef]);

    return(
        <ul ref={listContacts} className={[css.listContacts, 'listContactsForGap'].join(' ')}>
            {contacts.length !== 0 &&
                contacts.map((contact) => { 
                    return(
                    <li key={contact.id} id={contact.id} className={[css.itemContact, 'itemContact'].join(' ')}>
                    <ItemContact 
                        contact={contact}
                        index={contacts.indexOf(contact)}
                        id={contact.id}
                        activeId={activeId}
                        actualScroll={actualScroll}
                    />
                    </li>
                )})
            }
        </ul>
    )
};