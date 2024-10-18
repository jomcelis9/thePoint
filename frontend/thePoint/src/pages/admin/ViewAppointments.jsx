import { useEffect, useState } from "react";
import axios from 'axios';
import { useOutletContext } from "react-router-dom";
import Table from "../../../components/table";
import HeaderRow from '../../../components/ui/HeaderRow';
import TableBody from "../../../components/ui/TableBody";



export default function ViewAppointments() {
  // Get the 'open' state from the AdminLayout component
  const { open } = useOutletContext();

  const statusConfirmed = "Confirmed";
  const statusRejected = "Rejected";
  const statusPending  = "Pending";


  return (
    <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 border`}>
      
      <div>
        <h1 className="text-xl"> Pending appointments</h1>
        {/* Table  */}

        <Table>
          <HeaderRow />
          <TableBody 
          statusOne={statusConfirmed} 
          statusTwo={statusRejected} 
          btnName1 ={"Confirm"} 
          btnName2={"Reject"}
          fetchDataQuery={"views_pending_appointments"}
          />
        </Table>

      </div>

      <div className="mt-5" >
        <h1 className="text-xl"> Confirmed appointments</h1>
        {/* Table  */}
        <Table>
          <HeaderRow />
          <TableBody 
          statusOne={statusPending} 
          statusTwo={statusRejected} 
          btnName1 ={"Pending"} 
          btnName2={"Reject"}
          fetchDataQuery={"views_confirmed_appointments"}
          />
        </Table>

      </div>
      
      <div className="mt-5" >
        <h1 className="text-xl"> Rejected appointments</h1>
        {/* Table  */}
        <Table>
          <HeaderRow />
          <TableBody 
          statusOne={statusConfirmed} 
          statusTwo={statusPending} 
          btnName1 ={"Confirm"} 
          btnName2={"Pending"}
          fetchDataQuery={"views_rejected_appointments"}
          />
        </Table>
        </div>
    </div>
  );
}
