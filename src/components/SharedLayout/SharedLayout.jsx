import { Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { Navigation } from "../Navigation/Navigation";
import css from './SharedLayout.module.css';
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../redux/workWithBackend/selectors";
import UserMenu from "../UserMenu/UserMenu";
import { setScreenOrientation } from "../../redux/contactsSlice";
import { selectScreenOrient } from "../../redux/selectors";

export const SharedLayout = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const screenOrient = useSelector(selectScreenOrient);

    const forOrientation = () => {
        setTimeout(() => {
                dispatch(setScreenOrientation(window.innerWidth));
        }, 100);
    };

    forOrientation();

    window.removeEventListener('orientationchange', forOrientation);

    useEffect(() => {
        window.addEventListener('orientationchange', forOrientation);
    });

    useEffect(() => {
        const forBackgroundAllPage = () => {
            const realScreenHeight = window.innerHeight;
                    const header = document.querySelector('header');
                    const main = document.querySelector('main');
                    const headerHeight = header.getBoundingClientRect().height;
                    const mainHeight = main.getBoundingClientRect().height;
                    const pageHeight = headerHeight + mainHeight;
                    const body = document.querySelector('body');
                        body.style.height = '100%';
                        const root = document.querySelector('#root');
                        root.style.height = '100%';
                        const html = document.querySelector('html');
                        html.style.height = '100%';
                    if(realScreenHeight < pageHeight){
                        body.style.height = 'auto';
                        root.style.height = 'auto';
                        html.style.height = 'auto';
                    }
        };
        forBackgroundAllPage()
    }, [screenOrient]);

    return(
        <>
            <header className={css.headerSharedLayout}>
                <Navigation/>
                {isLoggedIn && <UserMenu/>}
            </header>
            <main>
                <div className={[css.divForAllMain, 'divForAllMain'].join(' ')}>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
                </div>
            </main>
        </>
    )
}