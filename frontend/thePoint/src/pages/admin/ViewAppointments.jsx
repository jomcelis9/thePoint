import { useEffect, useState } from "react";
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

  const deleteData = async (table, appointmentId) => {
    console.log("Button clicked, attempting delete");
    try {
      // Ensure correct route and parameter handling
      const response = await axios.delete(`http://localhost:5001/${table}/${appointmentId}`);
      console.log('Data deleted:', response.data);
      window.location.reload(false);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // This function can now be simplified to directly call deleteData
  const deleteDataOnClick = (e, table, appointmentId) => {
    e.preventDefault(); // Prevent any default behavior
    deleteData(table, appointmentId); // No need for try-catch here as it's handled in deleteData
  };

  return (
    <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 border`}>
      
      <div className="relative">
        <h1 className="text-xl mb-3"> Appointments</h1>

        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>

            <input type="text" id="table-search" 
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
            </input>
          </div>

          <button type="button" className="mx-2"
            onClick={(e) => deleteDataOnClick(e, "appointments", 7)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
            </svg>
          </button>
        </div>

        <Table>
          <HeaderRow />
          <TableBody 
          statusOne={statusConfirmed} 
          statusTwo={statusRejected} 
          statusThree={statusPending}
          btnName1 ={"Confirm"} 
          btnName2={"Reject"}
          fetchDataQuery={"appointments"}
          />
        </Table>

      </div>

      <div className="mt-5" >
        <h1 className="text-xl"> Confirmed appointments</h1>
        <Table>
          <HeaderRow />
          <TableBody 
          statusOne={statusPending} 
          statusTwo={statusRejected} 
          btnName1 ={"Pending"} 
          btnName2={"Reject"}
          fetchDataQuery={"confirmed_appointment_details"}
          />
        </Table>
      </div>
      
      <div className="mt-5" >
        <h1 className="text-xl"> Rejected appointments</h1>
        <Table>
          <HeaderRow />
          <TableBody 
          statusOne={statusConfirmed} 
          statusTwo={statusPending}
          btnName1 ={"Confirm"} 
          btnName2={"Pending"}
          fetchDataQuery={"cancelled_appointment_details"}
          />
        </Table>
      </div>
    </div>
  );
}
