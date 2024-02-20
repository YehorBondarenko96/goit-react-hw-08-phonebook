import css from '../Styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/opertions';
import { selectNumbsForImg, selectBackgrounds, selectBackgroundImages, selectBgGeneral, selectReservedBG } from '../../redux/selectors';
import { deleteNumb } from '../../redux/backgroundImgSlice';
import { useEffect, useState, useRef } from 'react';
import { ChangingCWindow } from '../ChangingCWindow/ChangingCWindow';
import { setScrollLeftLists } from '../../redux/contactsSlice';
import { selectScreenOrient } from "../../redux/selectors";


export const ItemContact = ({contact, index, id, activeId}) => {
    const extraReservedImg = 'https://lh3.googleusercontent.com/pw/ABLVV857Vcs93eVOrm0Pm8WnNvcJSKLX3arSslyCmWpj-7cuG6ywCsjBpMiPRikFXgiC2xK8v2En5xPEynswskO4l7gjBpdWNWzhFRyOj8BJ3orxfjDDlbSF1EOr7mROLVTTOvdNiJhvM432128-GmRqOrEKcQ=w1500-h1000-s-no-gm?authuser=0';

    const dispatch = useDispatch();
    const numbsForImg = useSelector(selectNumbsForImg);
    const backgrounds = useSelector(selectBackgrounds);
    const screenOrient = useSelector(selectScreenOrient);


    const lengthBgImages = useSelector(selectBackgroundImages).length;
    const objBgGeneral = useSelector(selectBgGeneral);
    const bgGeneral = objBgGeneral ? objBgGeneral.img : 'https://lh3.googleusercontent.com/pw/ABLVV84w_pNrNk2EMyul9WEZQIGgWoLvREgHEC97b4Mf15Ks5Hoqt7v7nc07QVJrbIMlK2LWegS0dAQKL6yuKPxHGHqTDwlQOCxOMGTWtrhzl73nYIFv9CWK4h9QUB2dvOTMfXj-twNVuqOHLhczMnZRTAvECg=w1920-h1080-s-no-gm?authuser=0';
    const objReservedBg = useSelector(selectReservedBG);
    const reservedBG = objReservedBg ? objReservedBg.img : extraReservedImg;

    const [activeChanging, setActiveChenging] = useState(false);

    const firstDivItemContactRef= useRef(null);
    const firstDivItemContact = firstDivItemContactRef.current;
    const divItemContactRef = useRef(null);
    const divItemContact = divItemContactRef.current;
    const buttonChRef = useRef(null);
    const buttonCh = buttonChRef.current;
    const buttonDelRef = useRef(null);
    const buttonDel = buttonDelRef.current;

    const updateStateForDelete = () => {
        const idContact = contact.id;
        dispatch(deleteContact(idContact));
        dispatch(deleteNumb());
        const contactsList = document.querySelector('.listContactsForGap');
        const scrollUl = contactsList.scrollLeft;
        dispatch(setScrollLeftLists(scrollUl));
        };

    const [reservedImg, setReservedImg] = useState(extraReservedImg);

    useEffect(() => {
        if(lengthBgImages > 1){
            setReservedImg(reservedBG);
        } else if(lengthBgImages === 1){
            setReservedImg(bgGeneral);
        } else {
            setReservedImg(extraReservedImg);
        }
    }, [lengthBgImages, bgGeneral, reservedBG, reservedImg]);

    const lengthNumbsForImg = numbsForImg.length;
    let numb = 1;

    if (index >= lengthNumbsForImg){
        numb = numbsForImg[index % lengthNumbsForImg];
    } else {
        numb = numbsForImg[index];
    }

    const img = backgrounds[numb] ? backgrounds[numb].img : null;

    const closeChangingCWindow = () => {setActiveChenging(false)};

    useEffect(() => {
        const coef = 2;
        const screenWidth = screenOrient <= 1000 ? screenOrient : 1000;
        if(id !== activeId && firstDivItemContact && divItemContact && buttonCh && buttonDel){
            setActiveChenging(false);
            firstDivItemContact.style.borderRadius = screenWidth/(coef * 22) + 'px';
            divItemContact.style.borderRadius = screenWidth/(coef * 22) + 'px';
            divItemContact.style.textShadow = screenWidth/(coef * 250) + 'px ' + screenWidth/(coef * 250) + 'px ' + screenWidth/(coef * 100) + 'px black';
            buttonCh.style.top = screenWidth/(coef * 22) + 'px';
            buttonCh.style.left = screenWidth/(coef * 22) + 'px';
            buttonDel.style.top = screenWidth/(coef * 22) + 'px';
            buttonDel.style.right = screenWidth/(coef * 22) + 'px';
            buttonDel.style.width = screenWidth/(coef * 13) + 'px';
            buttonDel.style.height = screenWidth/(coef * 13) + 'px';
            buttonCh.style.width = screenWidth/(coef * 13) + 'px';
            buttonCh.style.height = screenWidth/(coef * 13) + 'px';
        } else if(id === activeId && firstDivItemContact && divItemContact && buttonCh && buttonDel){
            firstDivItemContact.style.borderRadius = screenWidth/(coef * 22) * 1.4 + 'px';
            divItemContact.style.borderRadius = screenWidth/(coef * 22) * 1.4 + 'px';
            divItemContact.style.textShadow = screenWidth/(coef * 250) + 'px' + screenWidth/(coef * 250) + 'px' + screenWidth/(coef * 100) + 'px black';
            buttonCh.style.top = screenWidth/(coef * 22) * 1.4 + 'px';
            buttonCh.style.left = screenWidth/(coef * 22) * 1.4 + 'px';
            buttonDel.style.top = screenWidth/(coef * 22) * 1.4 + 'px';
            buttonDel.style.right = screenWidth/(coef * 22) * 1.4 + 'px';
            buttonDel.style.width = screenWidth/(coef * 13) * 1.4 + 'px';
            buttonDel.style.height = screenWidth/(coef * 13) * 1.4 + 'px';
            buttonCh.style.width = screenWidth/(coef * 13) * 1.4 + 'px';
            buttonCh.style.height = screenWidth/(coef * 13) * 1.4 + 'px';
        }
    }, [activeId, id, divItemContact, firstDivItemContact, buttonCh, buttonDel, screenOrient]);

    const forClickUpdBut = () => {
        setTimeout(() => {
            setActiveChenging(true)
        }, 400);
    };

    return(
        <div ref={firstDivItemContactRef} className={[css.firstDivItemContact, 'firstDivItemContact'].join(' ')}
        style={{
            backgroundImage: `url(${img || reservedImg})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            }}>
                <div ref={divItemContactRef} className={[css.divItemContact, 'divItemContact'].join(' ')}>
                    <h2 className={css.pItemContactsName}>{contact.name}</h2> 
                    <p className={css.pItemContactsNumber}>{contact.number}</p>
                    <button ref={buttonDelRef} id={contact.id} className={css.buttonDelete} type='button' onClick={updateStateForDelete}>
                        Delete
                    </button>
                    <button ref={buttonChRef} type='button' className={css.changeCBut} onClick = {forClickUpdBut}>
                        Change contact
                    </button>
                    {activeChanging && 
                    <ChangingCWindow 
                    closeChangingCWindow = {closeChangingCWindow} 
                    name = {contact.name}
                    number = {contact.number}
                    id = {contact.id}
                    />}
                </div>
        </div>
    )
}