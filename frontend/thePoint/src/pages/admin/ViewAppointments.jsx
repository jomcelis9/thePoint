import { useState } from "react";
import axios from 'axios';
import { useOutletContext } from "react-router-dom";
import Table from "../../../components/table";
import HeaderRow from '../../../components/ui/HeaderRow';
import TableBody from "../../../components/ui/TableBody";



export default function ViewAppointments() {
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
          column2 = {"patient_name"} 
          column3 = {"preferred_time"}
          column4 = {"preferred_date"}     
          column5 = {"booking_status"}
          column6= {"booking_date"}
          actionable = {true}
          headerOne = {"ID"}
          headerTwo = {"Name"}boo
          headerThree = {"Time"}
          headerFour = {"Date"}
          headerFive = {"Status"}
          headerSix = {"Date Booked"}
          headerSeven= {"Action"}
          id={"appoint_id"}
          />
        </Table>

      </div>
    
    </div>
  );
}
