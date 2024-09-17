import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import BookingPage from './pages/BookingPage';
import RegisterPage from './pages/RegisterPage';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/booking" element={<BookingPage />}/>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path ="/register" element ={<RegisterPage/>}/>
    </Routes>
  );
}

export default App

