import css from '../Styles.module.css';
import {  useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/opertions';
import { selectNumbsForImg } from '../../redux/selectors';

export const ItemContact = ({contact, imagesForContacts, index}) => {
    const dispatch = useDispatch();
    const numbsForImg = useSelector(selectNumbsForImg);

    const updateStateForDelete = () => {
        const idContact = contact.id;
        dispatch(deleteContact(idContact));
        };

    const reservedImg = imagesForContacts[0];
    const secondImagesForContacts = imagesForContacts.filter(img => img !== reservedImg);

    const lengthNumbsForImg = numbsForImg.length - 1;
    let numb = 1;

    if (index > lengthNumbsForImg){
        numb = numbsForImg[index % lengthNumbsForImg];
    } else {
        numb = numbsForImg[Math.abs(index)];
    }

    
    const img = secondImagesForContacts[numb];

    return(
        <li key={contact.id} className={css.itemContscts}
        style={{
            backgroundImage: `url(${img || reservedImg})`,
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