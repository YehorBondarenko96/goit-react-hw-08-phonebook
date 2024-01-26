import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
import { searchForBackground } from "../redux/searchForStyles";

const Home = lazy(() => import('./Home/Home'))
const Register = lazy(() => import("./Register/Register"));
const PageUsers = lazy(() => import('./PageUsers/PageUsers'));
const LoggedInOrNot = lazy(() => import('./LoggedInOrNot/LoggedInOrNot'));

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
      <div style={{width: '100%'}}>
  <Routes>
    <Route path="/" element={<SharedLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="/register" element={
      <LoggedInOrNot redirectTo='/contacts' component={<Register/>}/>
    }/>
    <Route path="/contacts" element={<PageUsers/>}/>
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