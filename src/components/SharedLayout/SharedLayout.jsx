import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Navigation } from "../Navigation/Navigation";
import css from './SharedLayout.module.css';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/workWithBackend/selectors";
import UserMenu from "../UserMenu/UserMenu";

export const SharedLayout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <>
            <header className={css.headerSharedLayout}>
                <Navigation/>
                {isLoggedIn && <UserMenu/>}
            </header>
            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}