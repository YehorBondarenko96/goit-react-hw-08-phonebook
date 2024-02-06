import css from './RegisterForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/workWithBackend/operations';
import { selectError } from '../../redux/workWithBackend/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { cleanError } from '../../redux/workWithBackend/slice';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const [realScreenWidth, setRealScreenWidth] = useState(null);

    useEffect(() => {
        setRealScreenWidth(window.innerWidth);
        if(Number(error) === 400){toast.error('Invalid registration data')};
        dispatch(cleanError());
    }, [error, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.currentTarget.elements.name.value;
        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;
        dispatch(register({name, email, password}));
    };

    return(
        <div className={css.divRegisterForm}>
            <h2 className={css.titleRegisterForm}>Registration in your <span className={css.logoNameGreetingRegisterForm}>
            <span className={css.letterRegisterForm}>C</span>ontactHu<span className={css.letterRegisterForm}>b</span>
            </span></h2>
            <form className={css.registerForm} onSubmit={handleSubmit}>
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
                type="password"
                autoComplete="off"
                autoFocus
                placeholder= {realScreenWidth > 550 ? "The password must consist of at least 7 characters" : "Password: min. 7 chars."} 
                />
                </label>
                <button className={css.buttonRegisterForm} type="submit">Registration</button>
            </form>
            <ToastContainer />
            </div>
    )
};

export default RegisterForm;