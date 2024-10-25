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

        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>

            <input type="text" id="table-search" 
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
            </input>
          </div>
        </div>

        <Table>
          <HeaderRow />
          <TableBody 
          statusOne = {statusConfirmed} 
          statusTwo = {statusRejected} 
          statusThree = {statusPending}
          btnName1 = {"Confirm"} 
          btnName2 = {"Reject"}
          fetchDataQuery = {"appointments"}

          />
        </Table>

      </div>
    
    </div>
  );
}
