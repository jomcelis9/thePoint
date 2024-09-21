import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import BookingPage from './pages/BookingPage';
import RegisterPage from './pages/RegisterPage';
import PaymentPage from './pages/PaymentPage';
import ConfirmPage from './pages/ConfirmPage';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:4000";

function App() {

  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/booking" element={<BookingPage />}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/confirm" element={<ConfirmPage/>}/>
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path ="/register" element ={<RegisterPage/>}/>
    </Routes>
  );
}

export default App

