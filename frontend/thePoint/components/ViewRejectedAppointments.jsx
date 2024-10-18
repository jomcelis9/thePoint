import { useEffect, useState } from "react"
import HeaderRow from "./ui/HeaderRow";
import axios from 'axios'

export default function ViewRejectedAppointments(){
    const [data, setData] = useState([]); // updates data from any requests
    const [loading, setLoading] = useState(false); // for handling loading state
    const [error, setError] = useState(null);

    const fetchData = async (table) => {
        try {
            setLoading(true); // set loading state to true before fetching data
            const response = await axios.get(`http://127.0.0.1:5000/${table}`);
            setData(response.data); // update data state
            console.log("Data:", response.data);
            setLoading(false); // set loading state to false after data is fetched
        } catch (error) {
            console.log('Error fetching data: ', error);
            setError('Error fetching data');
            setLoading(false); // stop loading if there's an error
        }
    };

    const updateOnClick = async (e, table, appointmentNumber, status) => {
        try {
            console.log('Button is working...');
            await updateData(table, appointmentNumber, status); // update the data
            fetchData('views_pending_appointments'); // re-fetch the data to update the table
        } catch (error) {
            console.log('Error updating data: ', error);
            setError('Error updating data');
        }
    };
    
    // Function to send a PUT request to update data
    const updateData = async (table, appointmentNumber, status) => {
        try {
            const response = await axios.put(`http://127.0.0.1:5000/${table}/${appointmentNumber}/${status}`, { status });
            console.log('Data updated:', response.data);
        } catch (error) {
            console.log('Error updating data', error);
        }
    };

    useEffect(()=> {
        fetchData('views_Rejected_Appointments')
    },[]);

    if (loading) {
        return <div>Loading...</div>; // show loading spinner or message
    }

    if (error) {
        return <div>{error}</div>; // show error message
    }

    return(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <HeaderRow />
            <tbody>
                
                {/* Map through the data and generate rows */}
                {data.map((row, index) => {
        
                  const appointmentNumber = Object.values(row)[3];
                  const statusConfirmed = "Confirmed"
                  const statusReject = "Rejected"
                  const statusPending = "Pending"
                  //  get the appointment number from each row
                
                return (
                  <tr key={index}>
                      <tr>
                          <th scope="col" className="p-4">
                              <div className="flex items-center">
                                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                              </div>
                          </th>
                      </tr>
        
                      {Object.values(row).slice(0, -1).map((val) => (
        
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={appointmentNumber}>
                          {val}             
                      </th>
        
                      ))}
        
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white gap-2 ">
                              <div className="flex justify-center items-center" >
                                        
                                        <button
                                        onClick={(e) => updateOnClick(e, "appointments", appointmentNumber, statusConfirmed)}
                                        type="button"
                                        className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 shadow-md bg-gradient-to-r from-thePointRed to-thePointPink text-white font-bold rounded-full text-sm px-2 py-1 text-center mr-7">
                                        Confirm
                                        </button>

                                        {/* TEST IF DYNAMIC */}
                                        {/* <input
                                        value={input} onChange={ev => setInput(ev.target.value)}
                                        id="testInput" name="testInput" type="text" required className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Luengas" /> */}
    
                                      <button
                                      onClick={(e) => updateOnClick(e, "appointments", appointmentNumber, statusPending )}
                                      type="button"
                                      className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 
                                      bg-transparent text-white font-bold rounded-full text-sm
                                      text-center">
                                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                          <path d="M6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.999 10.9384L16.7176 6.2198C17.0105 5.92691 17.4854 5.92691 17.7782 6.2198C18.0711 6.51269 18.0711 6.98757 17.7782 7.28046L13.0597 11.999L17.7782 16.7176C18.0711 17.0105 18.0711 17.4854 17.7782 17.7782C17.4854 18.0711 17.0105 18.0711 16.7176 17.7782L11.999 13.0597L7.28033 17.7784C6.98744 18.0713 6.51256 18.0713 6.21967 17.7784C5.92678 17.4855 5.92678 17.0106 6.21967 16.7177L10.9384 11.999L6.21967 7.28033Z" fill="#343C54"/>
                                          </svg>
                                      </button> 
                                      
                              </div>
                          </th>
                  </tr>
                );
                })}
              </tbody>
        </table>
        </div>
    )
}