import css from '../Styles.module.css';
import { ItemContact } from 'components/ItemContact/ItemContact';
import { selectContacts, selectFilter, selectIsLoading, selectError, selectNumbsForImg } from '../../redux/selectors';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/opertions";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import {  selectBackgroundImages } from '../../redux/selectors';
import { searchForBackground } from '../../redux/searchForStyles';
import { createNumbs } from '../../redux/backgroundImgSlice';

export const ContactList = () => {
    let contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    // const imgForBackground = useSelector(backgroundImg);
    const imgForBackground = 'https://pixabay.com/get/g3ed7d486cc5b37731e8ed71396efa6382fca2f5612edc7fa4e1432973c87e1a5de6c13079cfcaf6225e626de69f10f90_1280.jpg';
    const backgroundImages = useSelector(selectBackgroundImages);
    const numbsForImg = useSelector(selectNumbsForImg);

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const imagesForContacts = backgroundImages.filter(img => img !== imgForBackground);

    
    const makeMassifNumbs = () => {
        const massifNumbers = [];
        const lengthImgMas = imagesForContacts.length;
        function createMassNumbs (){
            const randomNumb = Math.floor(Math.random() * lengthImgMas) + 1;
        const lengthMasNumb = massifNumbers.length;
        if( massifNumbers[lengthMasNumb-1] !== randomNumb &&
            massifNumbers[lengthMasNumb-2] !== randomNumb &&
            massifNumbers[lengthMasNumb-3] !== randomNumb &&
            massifNumbers[lengthMasNumb-4] !== randomNumb &&
            massifNumbers[lengthMasNumb-5] !== randomNumb ){
            massifNumbers.push(randomNumb);
        } else {
            createMassNumbs();
        }
        };
        for (let i = 0; i <= lengthImgMas; i++){
            createMassNumbs();
        }
        return massifNumbers
    };

    useEffect(() => {
        if (numbsForImg.length < imagesForContacts.length){
        dispatch(createNumbs(makeMassifNumbs()));
        };
    });

    useEffect(() => {
        dispatch(fetchContacts());
        dispatch(searchForBackground());
    }, [dispatch]);

    if(filter.length > 0) {
                contacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
            }

    return(
        <div className={css.divForContactList} 
        style={{
            backgroundImage: `url(${imgForBackground})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            }}>
            {error && <h2>Oopsss...Something went wrong...</h2>}
            {isLoading && !error ? <Loader /> : (
                    <ul className={css.listContacts}>
                {contacts.length !== 0 &&
                contacts.map((contact) => (
                        <ItemContact 
                    key={contact.id}
                    contact={contact}
                    imagesForContacts={imagesForContacts}
                    index={contacts.indexOf(contact)}
                    />
                ))
                }
                </ul>
            )}
            {error && contacts.length > 0 && <h2>Oopsss...Something went wrong...</h2>}
        </div>
    )
}