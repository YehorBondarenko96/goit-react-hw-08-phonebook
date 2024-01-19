import css from '../Styles.module.css';
import {  useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/opertions';
import { selectNumbsForImg, selectBackgrounds } from '../../redux/selectors';
import { deleteNumb } from '../../redux/backgroundImgSlice';

export const ItemContact = ({contact, index}) => {
    const dispatch = useDispatch();
    const numbsForImg = useSelector(selectNumbsForImg);
    const backgrounds = useSelector(selectBackgrounds);

    const updateStateForDelete = () => {
        const idContact = contact.id;
        dispatch(deleteContact(idContact));
        dispatch(deleteNumb());
        };

    const reservedImg = 'https://pixabay.com/get/g44ed012b5318cdd8e2a1cfb886aed57bc421e5f5974ba512ea672535a75d2bb0d1a82852705eac0edab0d5926df8c1b1_1280.jpg';

    const lengthNumbsForImg = numbsForImg.length;
    let numb = 1;

    if (index >= lengthNumbsForImg){
        numb = numbsForImg[index % lengthNumbsForImg];
    } else {
        numb = numbsForImg[index];
    }

    
    const img = backgrounds[numb] ? backgrounds[numb].img : 'https://pixabay.com/get/gee299433c5e821a3f4a75f67de07ae42a18743837de827a20fce49e3e9e330757c3d649f2e028a3f3c0ea6db2d5138716bd86d685a7c8e5d83a06777c8b0c2d9_1280.jpg';

    return(
        <li key={contact.id} className={css.itemContscts}
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