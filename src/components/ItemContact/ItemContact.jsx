import css from '../Styles.module.css';
import {  useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/opertions';
import { selectNumbsForImg, selectBackgrounds, selectBackgroundImages, selectBgGeneral, selectReservedBG } from '../../redux/selectors';
import { deleteNumb } from '../../redux/backgroundImgSlice';
import { useEffect, useState } from 'react';

export const ItemContact = ({contact, index}) => {
    const dispatch = useDispatch();
    const numbsForImg = useSelector(selectNumbsForImg);
    const backgrounds = useSelector(selectBackgrounds);

    const lengthBgImages = useSelector(selectBackgroundImages).length;
    const objBgGeneral = useSelector(selectBgGeneral);
    const bgGeneral =objBgGeneral ?objBgGeneral.img : null;
    const objReservedBg = useSelector(selectReservedBG);
    const reservedBG = objReservedBg ? objReservedBg.img : null;

    const updateStateForDelete = () => {
        const idContact = contact.id;
        dispatch(deleteContact(idContact));
        dispatch(deleteNumb());
        };

    const [reservedImg, setReservedImg] = useState(null);

    useEffect(() => {
        if(lengthBgImages > 1){
            setReservedImg(reservedBG);
        } else if(lengthBgImages === 1){
            setReservedImg(bgGeneral);
        } else {
            setReservedImg(null);
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
    console.log('img: ', img);
    console.log('reservedImg: ', reservedImg);
    return(
        <li id='itemContact' tabIndex={0} key={contact.id} className={css.itemContact}
        style={{
            backgroundImage: `url(${img || reservedImg})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            }}>
                <div className={css.divItemContact}>
                    <h2 className={css.pItemContactsName}>{contact.name}:</h2> 
                    <p className={css.pItemContactsNumber}>{contact.phone}</p>
                    <button id={contact.id} className={css.buttonDelete} type='button' onClick={updateStateForDelete}>
                        Delete
                    </button>
                </div>
        </li>
    )
}