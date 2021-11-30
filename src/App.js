import React from 'react'
import { Link } from "react-router-dom"

import { Login } from './components/Login'
import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'

import appStyles from './Styles/root.module.css'
import navStyles from './Styles/navbar.module.css'
import logStyles from './Styles/login.module.css'

export default function App() {
  return (
    <div className="App" className={appStyles.root}>
      <NavBar className={navStyles} />


      {/* 
      <SideBar />
      <Login className={logStyles} /> 
      */}
    </div>
  );
}