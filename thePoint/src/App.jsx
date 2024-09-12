import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import BookingPage from './pages/BookingPage';
import RegisterPage from './pages/RegisterPage';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path ="/booking" element={<BookingPage/>}>
        </Route>
      </Route>
    </Routes>
  )
}

export default App

