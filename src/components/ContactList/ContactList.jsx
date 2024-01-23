import css from '../Styles.module.css';
import { UlForCL } from 'components/UlForCL/UlForCL';
import { selectIsLoading, selectError, selectNumbsForImg, selectBackgrounds, selectBgGeneral } from '../../redux/selectors';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/opertions";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { searchForBackground } from '../../redux/searchForStyles';
import { createNumbs } from '../../redux/backgroundImgSlice';

export const ContactList = () => {
    
    const backgrounds = useSelector(selectBackgrounds);
    const numbsForImg = useSelector(selectNumbsForImg);

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const bgGeneral = useSelector(selectBgGeneral)
    const imgForBackground = bgGeneral ? bgGeneral.img : 'https://lh3.googleusercontent.com/pw/ABLVV86IPJr1Kwre2rY34RLHxw5s_jl_SAFHpmWY0V3BSJm_NjuCHs3IY1SS38gbQPCBKSz6jFxURe5sYDOs0gagIti84UDB_i0cbXzrUAPmtTkdC4EmLr7KNjESbtNtDjPs_rgGNtR4uTNT7ARtfLoqoJJA2A=w612-h344-s-no-gm?authuser=0';
    
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

    



    return(
        <>
        {error ? (
        <h2>Oopsss...Something went wrong...</h2>
        ) : (
        <div id='divForContactList' className={css.divForContactList} 
            style={{
                backgroundImage: `url(${imgForBackground})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                }}>
                {isLoading && !error ? <Loader /> : <UlForCL />}
            </div>
            )}
        </>
    )
}