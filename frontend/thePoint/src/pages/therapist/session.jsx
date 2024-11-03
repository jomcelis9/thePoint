import { useState } from "react";
import axios from 'axios';
import { useOutletContext } from "react-router-dom";
import Table from "../../../components/table";
import HeaderRow from '../../../components/ui/HeaderRow';
import TableBody from "../../../components/ui/TableBody";



export default function Session() {
  const { open } = useOutletContext();
  const statusConfirmed = "confirmed";
  const statusRejected = "rejected";
  const statusPending  = "pending";

  
  return (
    <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 border`}>
      
      <div className="relative">
        <h1 className="text-xl mb-3"> Sessions </h1> 
        <Table>
          <TableBody 
          statusOne = {statusConfirmed} 
          statusTwo = {statusRejected} 
          statusThree = {statusPending}
          btnName1 = {"Confirm"} 
          btnName2 = {"Reject"}
          fetchDataQuery = {"session"}
          column1 = {"session_id"}  
          column2 = {"patient_name"}
          column3= {"appoint_id"}  
          actionable = {false}
          headerOne = {"ID"}
          headerTwo = {"Patient Name"}
          headerThree={"Appointment Number"}
          />
        </Table>

      </div>
    
    </div>
  );
}
