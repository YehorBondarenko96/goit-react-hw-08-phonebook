import css from './ChangingCWindow.module.css';

export const ChangingCWindow = ({closeChangingCWindow, name, number}) => {
    return(
            <form className={css.formChangingCWindow} >
                <label className={css.labelChangingCWindow}>
                    <span className={css.nameInputChangingCWindow}>Name</span>
                <input className={css.inputChangingCWindow} 
                defaultValue={name}
                type="text" 
                name="name" 
                required 
                />
                </label>
                <label className={css.labelChangingCWindow}>
                        <span className={css.nameInputChangingCWindow}>Number</span>
                    <input className={css.inputChangingCWindow}
                    defaultValue={number}
                    type="tel"
                    name="number" 
                    required 
                    />
                </label>
                <div className={css.buttonsChangingCWindow}>
                <button className={css.buttonChangingCWindow} type="button" onClick={closeChangingCWindow}>Changen't contact</button>
                <button className={css.buttonChangingCWindow} type="submit">Change contact</button>
                </div>
            </form>
    )
};