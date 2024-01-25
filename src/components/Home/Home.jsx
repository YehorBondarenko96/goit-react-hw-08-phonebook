import css from '../Styles.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className={css.allDivHome}>
        <div className={css.greetingHome}>
        <h2 className={css.hllGreetingHome}>Hello, in </h2><span className={css.logoNameGreetingHome}>MyPhoneBook</span>
        </div>
        <div className={css.buttonsHome}>
        <button className={css.buttonHome}>I have <span className={css.logoNameBtnHome}>MyPhoneBook</span></button>
        <Link to={'/register'}>
        <button className={css.buttonHome}>I haven't <span className={css.logoNameBtnHome}>MyPhoneBook</span>, 
        <br/>but I want will have that</button>
        </Link>
        </div>
        </div>
    )
};

export default Home;