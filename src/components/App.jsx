import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
import { searchForBackground } from "../redux/searchForStyles";

const Home = lazy(() => import('./Home/Home'))
const RegisterForm = lazy(() => import("./RegisterForm/RegisterForm"));
const PageUsers = lazy(() => import('./PageUsers/PageUsers'));
const LoggedInOrNot = lazy(() => import('./LoggedInOrNot/LoggedInOrNot'));
const NotLoggedOrY = lazy(() => import('./NotLoggedOrY/NotLoggedOrY'));
const LogInForm = lazy(() => import('./LogInForm/LogInForm'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchForBackground());
  }, [dispatch]);

  return (
    <div
      style={{
        background: '#202020',
        height: '100%',
        display: 'flex',
        fontSize: 20,
        color: '#fff',
        margin: 0,
        padding: 0
      }}
    >
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: "column"
      }}>
  <Routes>
    <Route path="/" element={<SharedLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="/register" element={
      <LoggedInOrNot redirectTo='/contacts' component={<RegisterForm/>}/>
    }/>
    <Route path="/login" element={
      <LoggedInOrNot redirectTo='/contacts' component={<LogInForm/>}/>
    }/>
    <Route path="/contacts" element={
      <NotLoggedOrY component={<PageUsers/>}/>
    }/>
  </Route>
  </Routes>
</div>
    </div>
  )
};







// {
//   "name": "your-project",
//   "version": "1.0.0",
//   "proxy": "https://pixabay.com/"
// }