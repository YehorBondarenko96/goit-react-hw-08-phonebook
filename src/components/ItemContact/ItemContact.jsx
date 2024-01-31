import css from '../Styles.module.css';
import {  useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/opertions';
import { selectNumbsForImg, selectBackgrounds, selectBackgroundImages, selectBgGeneral, selectReservedBG } from '../../redux/selectors';
import { deleteNumb } from '../../redux/backgroundImgSlice';
import { useEffect, useState } from 'react';
import { ChangingCWindow } from '../ChangingCWindow/ChangingCWindow';
import { setScrollLeftLists } from '../../redux/contactsSlice';

export const ItemContact = ({contact, index, id, activeId, actualScroll}) => {
    const extraReservedImg = 'https://lh3.googleusercontent.com/pw/ABLVV857Vcs93eVOrm0Pm8WnNvcJSKLX3arSslyCmWpj-7cuG6ywCsjBpMiPRikFXgiC2xK8v2En5xPEynswskO4l7gjBpdWNWzhFRyOj8BJ3orxfjDDlbSF1EOr7mROLVTTOvdNiJhvM432128-GmRqOrEKcQ=w1500-h1000-s-no-gm?authuser=0';

    const dispatch = useDispatch();
    const numbsForImg = useSelector(selectNumbsForImg);
    const backgrounds = useSelector(selectBackgrounds);

    const lengthBgImages = useSelector(selectBackgroundImages).length;
    const objBgGeneral = useSelector(selectBgGeneral);
    const bgGeneral = objBgGeneral ? objBgGeneral.img : 'https://lh3.googleusercontent.com/pw/ABLVV84w_pNrNk2EMyul9WEZQIGgWoLvREgHEC97b4Mf15Ks5Hoqt7v7nc07QVJrbIMlK2LWegS0dAQKL6yuKPxHGHqTDwlQOCxOMGTWtrhzl73nYIFv9CWK4h9QUB2dvOTMfXj-twNVuqOHLhczMnZRTAvECg=w1920-h1080-s-no-gm?authuser=0';
    const objReservedBg = useSelector(selectReservedBG);
    const reservedBG = objReservedBg ? objReservedBg.img : extraReservedImg;

    const [activeChanging, setActiveChenging] = useState(false);

    const updateStateForDelete = () => {
        const idContact = contact.id;
        dispatch(deleteContact(idContact));
        dispatch(deleteNumb());
        dispatch(setScrollLeftLists(actualScroll));
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
        if(id !== activeId){
            setActiveChenging(false)
        }
    }, [activeId, id]);

    return(
        <div className={css.firstDivItemContact}
        style={{
            backgroundImage: `url(${img || reservedImg})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            }}>
                <div className={css.divItemContact}>
                    <h2 className={css.pItemContactsName}>{contact.name}</h2> 
                    <p className={css.pItemContactsNumber}>{contact.number}</p>
                    <button id={contact.id} className={css.buttonDelete} type='button' onClick={updateStateForDelete}>
                        Delete
                    </button>
                    <button type='button' className={css.changeCBut} onClick = {() => setActiveChenging(true)}>
                        Change contact
                    </button>
                    {activeChanging && 
                    <ChangingCWindow 
                    closeChangingCWindow = {closeChangingCWindow} 
                    name = {contact.name}
                    number = {contact.number}
                    id = {contact.id}
                    actualScroll = {actualScroll}
                    />}
                </div>
        </div>
    )
}