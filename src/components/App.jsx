import React from "react";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";
// import css from './Styles.module.css';
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('./Home/Home'))
const Register = lazy(() => import("./Register/Register"));
const PageUsers = lazy(() => import('./PageUsers/PageUsers'));

export const App = () => {
  return (
    <div
      style={{
        background: '#202020',
        height: '100%',
        display: 'flex',
        fontSize: 20,
        color: '#fff',
        margin: 0,
        padding: 20
      }}
    >
      <div style={{width: '100%'}}>
  <Routes>
    <Route path="/" element={<SharedLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
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