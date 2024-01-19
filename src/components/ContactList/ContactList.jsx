import css from '../Styles.module.css';
import { ItemContact } from 'components/ItemContact/ItemContact';
import { selectContacts, selectFilter, selectIsLoading, selectError, selectNumbsForImg } from '../../redux/selectors';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/opertions";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { selectBackgrounds } from '../../redux/selectors';
import { searchForBackground } from '../../redux/searchForStyles';
import { createNumbs } from '../../redux/backgroundImgSlice';

export const ContactList = () => {
    let contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const backgrounds = useSelector(selectBackgrounds);
    const numbsForImg = useSelector(selectNumbsForImg);

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const imgForBackground = 'https://pixabay.com/get/g9072d6f6846fce7645d5fe5c262328dd068f2203cb39f6a51d9e6e20b22815de934a4afe8fa7d310d78ae673378338be1757cd6f00cfd576e98e119e9f635dc2_1280.jpg';
    
    const makeMassifNumbs = () => {
        const massifNumbers = [];
        const lengthImgMas = backgrounds.length - 1;
        function createMassNumbs (){
            const randomNumb = Math.floor(Math.random() * lengthImgMas);
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
        if (numbsForImg.length < backgrounds.length){
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