import css from '../Styles.module.css';

const RegisterForm = () => {
    return(
        <div className={css.divRegisterForm}>
        <h2 className={css.titleRegisterForm}>Registration in your Phonebook</h2>
        <form className={css.registerForm}>
            <label className={css.labelRegisterForm}>
                <span className={css.pRegisterForm}>Name</span>
            <input className={css.inputRegisterForm} 
            name='name'
            type="text"
            autoFocus
            placeholder="Please, enter your name" />
            </label>
            <label className={css.labelRegisterForm}>
                <span className={css.pRegisterForm}>Email</span>
            <input className={css.inputRegisterForm} 
            name='email'
            type="email"
            autoComplete="off"
            autoFocus
            placeholder="Please, enter your email" />
            </label>
            <label className={css.labelRegisterForm}>
                <span className={css.pRegisterForm}>Password</span>
            <input className={css.inputRegisterForm} 
            name='password'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Please, enter your password" />
            </label>
            <button className={css.button} type="submit">Add contact</button>
        </form>
        </div>
    )
};

export default RegisterForm;