import { useEffect, useState } from "react"
import HeaderRow from "./ui/HeaderRow";
import axios from 'axios'

export default function ViewConfirmedAppointments(){
    const[data, setData] = useState([]) // updates data from any requests
    const [loading, setLoading] = useState(false);
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
            fetchData('views_confirmed_appointments'); // re-fetch the data to update the table
            window.location.reload(false)
        } catch (error) {
            console.log('Error updating data: ', error);
            setError('Error updating data');
        }
    };

    const updateData = async (table, appointmentNumber, status) => {
        try {
            const response = await axios.put(`http://127.0.0.1:5000/${table}/${appointmentNumber}/${status}`, { status });
            console.log('Data updated:', response.data);
        } catch (error) {
            console.log('Error updating data', error);
        }
    };

    useEffect(()=> {
        fetchData('views_confirmed_appointments');
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
                                        onClick={(e) => updateOnClick(e, "appointments", appointmentNumber, statusPending)}
                                        type="button"
                                        className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 shadow-md bg-gradient-to-r from-thePointRed to-thePointPink text-white font-bold rounded-full text-sm px-2 py-1 text-center mr-7">
                                        {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                            <path d="M19.2803 6.76264C19.5732 7.05553 19.5732 7.53041 19.2803 7.8233L9.86348 17.2402C9.57058 17.533 9.09571 17.533 8.80282 17.2402L4.71967 13.157C4.42678 12.8641 4.42678 12.3892 4.71967 12.0963C5.01256 11.8035 5.48744 11.8035 5.78033 12.0963L9.33315 15.6492L18.2197 6.76264C18.5126 6.46975 18.9874 6.46975 19.2803 6.76264Z" fill="#ffffff"/>
                                        </svg> */}
                                        Pending
                                        </button>

                                        {/* TEST IF DYNAMIC */}
                                        {/* <input
                                        value={input} onChange={ev => setInput(ev.target.value)}
                                        id="testInput" name="testInput" type="text" required className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none" placeholder="Luengas" /> */}
    
                                      <button
                                      onClick={(e) => updateOnClick(e, "appointments", appointmentNumber, statusReject)}
                                      type="button"
                                      className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 
                                      bg-transparent text-black font-bold rounded-full text-sm
                                      text-center">
                                        Cancel
                                      </button> 
                                      
                              </div>
                          </th>
                  </tr>
                );
                })}
              </tbody>
        </table>
        </div>
    );
}