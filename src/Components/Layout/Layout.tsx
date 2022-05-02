import React from 'react';
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {Outlet} from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <Outlet/>


    </>
  );
};

