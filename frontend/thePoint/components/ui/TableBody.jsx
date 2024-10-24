import { useEffect,useState } from "react";
import axios from 'axios';

export default function TableBody({statusOne,statusTwo,btnName1,btnName2,fetchDataQuery}){


    const [data, setData] = useState([]); // updates data from any requests
    const [loading, setLoading] = useState(false); // for handling loading state
    const [error, setError] = useState(null); // to handle errors


    useEffect(() =>{
        fetchData(`${fetchDataQuery}`)
    },[])

    if (loading) {
        return <div>Loading...</div>; // show loading spinner or message
    }
  
    if (error) {
        return <div>{error}</div>; // show error message
    }


    const fetchData = async (table) => {
        try {
            setLoading(true); // set loading state to true before fetching data
            const response = await axios.get(`http://127.0.0.1:5001/appointments`);
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
    const updateOnClick = async (e, table, appointmentId, status) => {
        try {
            console.log('Button is working...');
            await updateData(table, appointmentId, status); // update the data
            fetchData('views_pending_appointments'); // re-fetch the data to update the table
            window.location.reload(false)
        } catch (error) {
            console.log('Error updating data: ', error);
            setError('Error updating data');
        }
    };

        // Function to send a PUT request to update data
    const updateData = async (table, appointmentId, status) => {
        try {
            const response = await axios.put(`http://127.0.0.1:5001/${table}/${appointmentId}/${status}`, { status });
            console.log('Data updated:', response.data);
        } catch (error) {
            console.log('Error updating data', error);
        }
    };


   return (
      <tbody>
        {data.map((row, index) => {
          const appointmentId = Object.values(row)[3];
          return (
            <tr key={index}>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              {Object.values(row).slice(0, -1).map((val) => (
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={appointmentId}>
                  {val}
                </th>
              ))}
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white gap-2">
                <div className="flex justify-center items-center">
                  <button
                    onClick={(e) => updateOnClick(e, "appointments", appointmentId, statusOne)}
                    type="button"
                    className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 shadow-md bg-gradient-to-r from-thePointRed to-thePointPink text-white font-bold rounded-full text-sm px-2 py-1 text-center mr-7">
                    {btnName1}
                  </button>
                  <button
                    onClick={(e) => updateOnClick(e, "appointments", appointmentId, statusTwo)}
                    type="button"
                    className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 bg-transparent text-black font-bold rounded-full text-sm text-center">
                    {btnName2}
                    </button>
                </div>
              </th>
              </tr>
    );
  })}
</tbody>
);
}