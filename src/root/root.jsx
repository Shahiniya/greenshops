import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Section9 from '../Component/section9/section9';
import Navbar from '../Component/navbar/navbar';
import App from '../App';

export const Root = () => {
  return (
    <Router>
        <Navbar/>
        <Route path ={'/Home'} component = {App} />
        <Route path ={'/Shop'} component = {Section9} />
    
    </Router>
  )
}
