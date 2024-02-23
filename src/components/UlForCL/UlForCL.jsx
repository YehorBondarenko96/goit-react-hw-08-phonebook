import css from "../Styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ItemContact } from "components/ItemContact/ItemContact";
import { selectContacts, selectFilter, selectScrollLeftLists } from "../../redux/selectors";
import { useRef, useEffect, useState } from "react";
import { setScrollLeftLists } from "../../redux/contactsSlice";
import { selectScreenOrient } from "../../redux/selectors";


export const UlForCL = () => {
    const dispatch = useDispatch();
    const allContacts = useSelector(selectContacts);
    const [contacts, setContacts] = useState(allContacts);
    const filter = useSelector(selectFilter);
    const scrollLeftLists = useSelector(selectScrollLeftLists);
    const screenOrient = useSelector(selectScreenOrient);

    const [activeId, setActiveId] = useState(null);

    const listContHasELRef = useRef(false);
    const itemContactRef = useRef([]);
    

    const indHasClickELRef = useRef([]);

    const listContacts = useRef(null);

    useEffect(() => {
        if(scrollLeftLists > 0){
            if(listContacts.current){
                setTimeout(() => {
                    listContacts.current.scrollLeft = scrollLeftLists;
                }, 100);
                dispatch(setScrollLeftLists(0));
            }
        }
    }, [scrollLeftLists, dispatch]);

    useEffect(() => {
        itemContactRef.current = [];
        if(filter.length > 0) {
            setContacts(allContacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())));
        } else{
            setContacts(allContacts);
        };
    }, [filter, allContacts]);

    useEffect(() => {
        const listContactsRef = listContacts.current;
        const indHasClickEL = indHasClickELRef.current;
        const itemsContact = itemContactRef.current.filter(li => li !== null);
        const listContactsForGap = document.querySelector('.listContactsForGap');
        const coef = 2;
        let realScreenWidth = window.innerWidth;
        let screenWidth = realScreenWidth <= 1000 ? realScreenWidth : 1000;
        if (screenWidth && itemsContact.length > 0) {
            itemsContact.forEach(i => {
            i.style.minWidth = screenWidth/coef + 'px';
            i.style.height = screenWidth/(coef * 1.667) + 'px';
            i.style.fontSize = screenWidth/(coef * 19) + 'px'; 
            i.style.borderRadius = screenWidth/(coef * 22) + 'px';
            setActiveId(null);
        });
        listContactsForGap.style.gap = screenWidth/(coef * 10) + 'px';

        const forScroll = () => {
                if(itemsContact.length > 0){
                    itemsContact.forEach(item => readRectItem(item, realScreenWidth));
                };
        };

            if(!listContHasELRef.current && listContactsRef && itemsContact){
                listContHasELRef.current = true;
                listContactsRef.addEventListener('scroll', forScroll);
            };

        const autoScroll = (item, conditionForAutoSc = 0) => {
            realScreenWidth = window.innerWidth;
            screenWidth = realScreenWidth <= 1000 ? realScreenWidth : 1000;
            if(screenWidth && itemsContact.length > 0){
                const notActiveItems = itemsContact.filter(i => i.getAttribute('id') !== item.getAttribute('id'));
                notActiveItems.forEach(i => {
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

                            setTimeout(() => {
                                if(listContactsRef){
                                    listContactsRef.addEventListener('scroll', forScroll);
                                };
                            }, 500);
            };
        };
        
        const forClickItem = (item, realScreenWidth) => {
            if(listContactsRef){
                listContactsRef.removeEventListener('scroll', forScroll);
            };
            const rectItem = item.getBoundingClientRect();
            const rectListContacts = listContacts.current.getBoundingClientRect();
            let firShiftVar = 260;
            let secShiftVar = 60;
            if(realScreenWidth >= 1000){
                firShiftVar = 300;
                secShiftVar = 100;
            } else if(realScreenWidth < 1000 && realScreenWidth >= 900){
                firShiftVar = 285;
                secShiftVar = 95;
            } else if(realScreenWidth < 900 && realScreenWidth >= 800){
                firShiftVar = 253;
                secShiftVar = 85;
            } else if(realScreenWidth < 800 && realScreenWidth >= 750){
                firShiftVar = 233;
                secShiftVar = 77;
            } else if(realScreenWidth < 750 && realScreenWidth >= 700){
                firShiftVar = 218;
                secShiftVar = 73;
            } else if(realScreenWidth < 700 && realScreenWidth >= 650 ){
                firShiftVar = 202;
                secShiftVar = 67;
            } else if(realScreenWidth < 650 && realScreenWidth >= 600){
                firShiftVar = 187;
                secShiftVar = 62;
            } else if(realScreenWidth < 600 && realScreenWidth >= 550){
                firShiftVar = 173;
                secShiftVar = 58;
            } else if(realScreenWidth < 550 && realScreenWidth >= 500){
                firShiftVar = 158;
                secShiftVar = 51;
            } else if(realScreenWidth < 500 && realScreenWidth >= 450
                ){
                firShiftVar = 153;
                secShiftVar = 58;
            } else if(realScreenWidth < 450 && realScreenWidth >= 400){
                firShiftVar = 137;
                secShiftVar = 51;
            } else if(realScreenWidth < 400 && realScreenWidth >= 350){
                firShiftVar = 121;
                secShiftVar = 46;
            } else if(realScreenWidth < 350){
                firShiftVar = 105;
                secShiftVar = 36;
            };
            if(rectItem.x < rectListContacts.x + rectListContacts.width/2) {
                const conditionForAutoSc = 0 - rectListContacts.width/2 + rectItem.x + firShiftVar;
                autoScroll(item, conditionForAutoSc);
            } else {
                const conditionForAutoSc = 0  - rectListContacts.width/2 + rectItem.x + secShiftVar;
                autoScroll(item, conditionForAutoSc);
            }
        };

        itemsContact.forEach(item => {
            const itemId = item.getAttribute('id');
            if (!indHasClickEL.includes(itemId) && listContactsRef) {
                item.addEventListener('click', () => forClickItem(item, realScreenWidth));
                indHasClickEL.push(itemId);
            }
        });

        const readRectItem = (item, realScreenWidth) => {
            const rectItem = item.getBoundingClientRect();
            const rectListContacts = listContacts.current.getBoundingClientRect();
            let startActive = rectListContacts.x + rectListContacts.width/2 - rectItem.width/2 + 50 - 270;
            let secondStAct = rectListContacts.x + rectListContacts.width/2 + rectItem.width/2 - 50 - 270;
            let firstMove = 200;
            let secondMove = 100;
            if(realScreenWidth <= 650 && realScreenWidth > 500){
                startActive = rectListContacts.x + rectListContacts.width/2 - rectItem.width/2 + 50 - 170;
                secondStAct = rectListContacts.x + rectListContacts.width/2 + rectItem.width/2 - 50 - 170;
                firstMove = 150;
            } else if(realScreenWidth <= 500 && realScreenWidth > 450){
                startActive = rectListContacts.x + rectListContacts.width/2 - rectItem.width/2 + 50 - 170;
                secondStAct = rectListContacts.x + rectListContacts.width/2 + rectItem.width/2 - 50 - 170;
                firstMove = 130;
            } else if(realScreenWidth <= 450 && realScreenWidth > 350){
                startActive = rectListContacts.x + rectListContacts.width/2 - rectItem.width/2 + 50 - 100;
                secondStAct = rectListContacts.x + rectListContacts.width/2 + rectItem.width/2 - 50 - 100;
                firstMove = 100;
            } else if(realScreenWidth <= 350){
                startActive = rectListContacts.x;
                secondStAct = rectListContacts.x + rectListContacts.width/2 + rectItem.width/2 - 50 - 60;
                firstMove = 80;
            }
            if(rectItem.x > startActive && 
                rectItem.x < rectListContacts.x + rectListContacts.width/2 &&
                !item.classList.contains(css.itemContactActive)){
                    const conditionForAutoSc = 0 - rectItem.width/2 + firstMove;
                autoScroll(item, conditionForAutoSc);
            } else if(rectItem.x > rectListContacts.x + rectListContacts.width/2 && 
                rectItem.x < secondStAct &&
                !item.classList.contains(css.itemContactActive)){
                    const conditionForAutoSc = 0 + rectItem.width/2 - secondMove;
                    autoScroll(item, conditionForAutoSc);
                }
        };

        return () => {
            screenWidth = null;
            if(listContactsRef){
                listContHasELRef.current = false;
                listContactsRef.removeEventListener('scroll', forScroll);
            };

            if(itemsContact.length > 0){
                itemsContact.forEach(item => {
                    item.removeEventListener('click', () => forClickItem(item, realScreenWidth));
                });
            indHasClickELRef.current = [];
            };
        }
    }
    }, [contacts, screenOrient]);

    useEffect(() => {
            const realScreenHeight = window.innerHeight;
            const header = document.querySelector('header');
                const main = document.querySelector('.divForAllMain');
                const headerHeight = header.getBoundingClientRect().height;
                const mainHeight = main.getBoundingClientRect().height;
                let pageHeight = headerHeight + mainHeight + 15;
                const body = document.querySelector('body');
                    body.style.height = '100%';
                    const root = document.querySelector('#root');
                    root.style.height = '100%';
                    const html = document.querySelector('html');
                    html.style.height = '100%';
                if(realScreenHeight < pageHeight && contacts.length > 0){
                    body.style.height = 'auto';
                    root.style.height = 'auto';
                    html.style.height = 'auto';
                };

    return () => {
        pageHeight = null;
    }
}, [contacts]);

    return(
        <ul ref={listContacts} className={[css.listContacts, 'listContactsForGap'].join(' ')}>
            {contacts.length !== 0 &&
                contacts.map((contact) => { 
                    return(
                        <li ref={e => { 
                            if (e !== null && !itemContactRef.current.some(i => i.getAttribute('id') === e.getAttribute('id'))) {
                                        itemContactRef.current.push(e); 
                                    }
                            }}
                            key={contact.id}
                            id={contact.id}
                            className={[css.itemContact, 'itemContact'].join(' ')}>
                    <ItemContact 
                        contact={contact}
                        index={contacts.indexOf(contact)}
                        id={contact.id}
                        activeId={activeId}
                    />
                    </li>
                )})
            }
        </ul>
    )
};