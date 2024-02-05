import css from './Home.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/workWithBackend/selectors';

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <div className={css.allDivHome}>
        <div className={css.greetingHome}>
            <h1 className={css.hlHome}>ContactHub</h1>
            <svg className={css.logoHome}>
            <use href="../contacts-svgrepo-com.svg#ContactsBook"></use>
            </svg>
        <h2 className={css.hllGreetingHome}>Welcome to </h2>
        <span className={css.logoNameGreetingHome}>ContactHub</span>
        <p className={css.sloganHome}>Find easily, Store conveniently</p>
        </div>
        <div className={css.buttonsHome}>
        {isLoggedIn ? (
            <Link to={'/contacts'}>
                <button className={css.buttonHome}>Log in <span className={css.logoNameBtnHome}>ContactHub</span></button>
            </Link>
        ) : (
            <>
            <Link to={'/login'}>
            <button className={css.buttonHome}>Log in <span className={css.logoNameBtnHome}>ContactHub</span></button>
            </Link>
            <Link to={'/register'}>
            <button className={css.buttonHome}>Sign in <span className={css.logoNameBtnHome}>ContactHub</span></button>
            </Link>
            </>
        )}
        </div>
        </div>
    )
};

export default Home;