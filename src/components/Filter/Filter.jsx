import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
    const filterWithState = useSelector(selectFilter);
    const dispatch = useDispatch();

    const updateStateForFilter = (evt) => {
        evt.preventDefault();
        const filterValue = evt.target.value;
        dispatch(setFilter(filterValue));
    };

        return(
            <label className={css.labelFilter}>
                <input 
                value={filterWithState}
                className={css.inputFilter} 
                type="text" 
                name="filter" 
                placeholder='Please start typing the desired name'
                onChange={updateStateForFilter}
                />
            </label>
        )
}