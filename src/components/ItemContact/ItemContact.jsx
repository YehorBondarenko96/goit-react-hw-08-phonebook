import css from '../Styles.module.css';
import {  useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/opertions';
import { writeNumbsImg } from '../../redux/backgroundImgSlice';
import { selectNumbsImg, selectBackgroundImages } from '../../redux/selectors';
import { useEffect, useState } from 'react';

export const ItemContact = ({contact}) => {
    const dispatch = useDispatch();
    const images = useSelector(selectBackgroundImages);
    const numbsImg = useSelector(selectNumbsImg);
    const [img, setImg] = useState(null);

    useEffect(() => {
        const randomInt = () => {
            const lengthImages = images.length;
        
            if (lengthImages !== 0){
                const newNumb = Math.floor(Math.random() * lengthImages) + 1;
            
                if(numbsImg.includes(newNumb)){
                    randomInt();
                } else {
                    dispatch(writeNumbsImg(newNumb));
                };
            };
        };
    
        const backgroundImg = () => {
            randomInt();
            const thisNumb = numbsImg[numbsImg.length - 1];
    
            setImg(images[thisNumb]);
        };
            
            backgroundImg()

            console.log(numbsImg);
        }, [images, dispatch, numbsImg])

    const updateStateForDelete = () => {
        const idContact = contact.id;
        dispatch(deleteContact(idContact));
        };

    return(
        <li key={contact.id} className={css.itemContscts}
        style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            }}>
                <h2 className={css.pItemContactsName}>{contact.name}:</h2> 
                <p className={css.pItemContactsNumber}>{contact.phone}</p>
                <button id={contact.id} className={css.buttonDelete} type='button' onClick={updateStateForDelete}>
                    Delete
                </button>
        </li>
    )
}