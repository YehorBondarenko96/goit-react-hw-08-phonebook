import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const SharedLayout = () => {
    return(
        <>
            <header>
                <nav>
                    {/* <Link to="/">Home</Link> */}
                    {/* <Link to="/movies">Movies</Link> */}
                </nav>
            </header>
            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}