import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from './pages/client/IndexPage';
import LoginPage from './pages/client/LoginPage';
import Layout from './Layout';
import BookingPage from './pages/client/BookingPage';
import RegisterPage from './pages/client/RegisterPage';
import PaymentPage from './pages/client/PaymentPage';
import ConfirmPage from './pages/client/ConfirmPage';
import ContactPage from './pages/client/ContactPage';
import axios from 'axios';
import AdminLayout from './adminLayout';
import ViewAppointments from './pages/admin/ViewAppointments';
import Dashboard from './pages/admin/Dashboard';
import ReportsAndData from './pages/admin/ReportsAndData';
import ClientManagement from './pages/admin/ClientManagement';
import Settings from './pages/admin/Settings';
import ForgotPassword from './pages/client/ForgotPasswordPage';
import ResetPasswordPage from './pages/client/ResetPasswordPage';
import AccountDetails from './pages/client/AccountDetails';
import PendingPage from './pages/client/PendingPage';
import BookChoice from './pages/client/BookChoice'; 
import NewClient from './pages/client/NewClient'; 
import ExistingPatient from './pages/client/ExistingPatient';
import TherapistLayout from '../src/therapistLayout'
import Patients from  './pages/therapist/patients';
import PatientSessions from './pages/therapist/PatientSessions';
import { useState , useEffect} from 'react';


axios.defaults.baseURL = "http://localhost:5001";

function App() {
  const [user, setUser] = useState(null);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        // If token exists, simulate fetching user data (you can replace this with a real API call)
        setUser({ email: 'user@example.com' }); // Set user data here
      }
    }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage user={user}/>} />
        {/* <Route path="/booking" element={<BookingPage />}/> */}
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/confirm" element={<ConfirmPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/accountdetails" element={<AccountDetails/>}/>
        <Route path="/pending" element={<PendingPage />} />
        <Route path="/bookchoice" element={<BookChoice />} />
        <Route path='/newclient' element={<NewClient />} />
        <Route path='/bookPatient' element={<ExistingPatient/>}></Route>
      </Route>  

      <Route path="admin" element={<AdminLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='view' element={<ViewAppointments />} />
        <Route path='report' element={<ReportsAndData />} />
        <Route path='clientManagement' element={<ClientManagement />} />
        <Route path='settings' element={<Settings />} />
      </Route>

      <Route path="therapist" element={<TherapistLayout/>}>
        <Route path = 'patients' element={<Patients />}/>
        {/* <Route path = 'session/patientSessions' element = {<PatientSessions/>}/> */}
        <Route path="/therapist/patients/patientSessions/:patient_id" element={<PatientSessions />} />
      </Route>
      
        <Route path="/login" element={<LoginPage onLogin={setUser} />} />
        <Route path ="/register" element ={<RegisterPage/>}/>
        <Route path="/forgot-password" element = {<ForgotPassword/>}/>
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
  );
}

export default App

