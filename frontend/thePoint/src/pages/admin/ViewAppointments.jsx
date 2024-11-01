import { useState } from "react";
import axios from 'axios';
import { useOutletContext } from "react-router-dom";
import Table from "../../../components/table";
import HeaderRow from '../../../components/ui/HeaderRow';
import TableBody from "../../../components/ui/TableBody";



export default function ViewAppointments() {
  // Get the 'open' state from the AdminLayout component
  const { open } = useOutletContext();
  const statusConfirmed = "confirmed";
  const statusRejected = "rejected";
  const statusPending  = "pending";

  return (
    <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 border`}>
      
      <div className="relative">
        <h1 className="text-xl mb-3"> Appointments</h1> 
        <Table>
          <TableBody 
          statusOne = {statusConfirmed} 
          statusTwo = {statusRejected} 
          statusThree = {statusPending}
          btnName1 = {"Confirm"} 
          btnName2 = {"Reject"}
          fetchDataQuery = {"appointments"}
          column1 = {"appoint_id"}  
          column2 = {"appoint_date"} 
          column3 = {"time"}
          column4 = {"patient_name"}     
          column5 = {"contact_number"}
          column6 ={"appointment_status"}    
          />
        </Table>

      </div>
    
    </div>
  );
}
