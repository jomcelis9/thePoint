import { useEffect, useState } from "react";
import axios from 'axios';
import HeaderRow from '../components/ui/HeaderRow';

export default function Table() {
    const [data, setData] = useState([]); // updates data from any requests
    const [loading, setLoading] = useState(false); // for handling loading state
    const [error, setError] = useState(null); // to handle errors

    // Function to fetch data from the table
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

    // Function to update status on button click
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

    // Fetch data on initial render
    useEffect(() => {
        fetchData('views_pending_appointments');
    }, []);

    if (loading) {
        return <div>Loading...</div>; // show loading spinner or message
    }

    if (error) {
        return <div>{error}</div>; // show error message
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <HeaderRow />
                <tbody>
                    {/* Map through the data and generate rows */}
                    {data.map((row, index) => {
                        const appointmentNumber = Object.values(row)[3];
                        const statusConfirmed = "Confirmed";
                        const statusReject = "Rejected";
                        
                        return (
                            <tr key={index}>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                {Object.values(row).slice(0, -1).map((val, i) => (
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={i}>
                                        {val}             
                                    </th>
                                ))}
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white gap-2 ">
                                    <div className="flex justify-center items-center">
                                        <button
                                            onClick={(e) => updateOnClick(e, "appointments", appointmentNumber, statusConfirmed)}
                                            type="button"
                                            className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 shadow-md bg-gradient-to-r from-thePointRed to-thePointPink text-white font-bold rounded-full text-sm px-2 py-1 text-center mr-7">
                                            Confirm
                                        </button>
                                        <button
                                            onClick={(e) => updateOnClick(e, "appointments", appointmentNumber, statusReject)}
                                            type="button"
                                            className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 
                                            bg-transparent text-white font-bold rounded-full text-sm
                                            text-center">
                                            Reject
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
