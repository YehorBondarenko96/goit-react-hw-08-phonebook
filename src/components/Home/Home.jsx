import css from './Home.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/workWithBackend/selectors';

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <div className={css.allDivHome}>
        <div className={css.greetingHome}>
        <h2 className={css.hllGreetingHome}>Hello, in </h2><span className={css.logoNameGreetingHome}>MyPhoneBook</span>
        </div>
        <div className={css.buttonsHome}>
        {isLoggedIn ? (
            <Link to={'/contacts'}>
                <button className={css.buttonHome}>Log In in <span className={css.logoNameBtnHome}>MyPhoneBook</span></button>
            </Link>
        ) : (
            <>
            <Link to={'/login'}>
            <button className={css.buttonHome}>Log in <span className={css.logoNameBtnHome}>MyPhoneBook</span></button>
            </Link>
            <Link to={'/register'}>
            <button className={css.buttonHome}>Sign in <span className={css.logoNameBtnHome}>MyPhoneBook</span></button>
            </Link>
            </>
        )}
        </div>
        </div>
    )
};

export default Home;