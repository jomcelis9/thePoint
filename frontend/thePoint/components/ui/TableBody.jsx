import { useEffect,useState} from "react";
import axios from 'axios';

export default function TableBody({statusOne,statusTwo,statusThree,btnName1,btnName2,fetchDataQuery}){


    const [data, setData] = useState([]); // updates data from any requests
    const [loading, setLoading] = useState(false); // for handling loading state
    const [error, setError] = useState(null); // to handle errors
    const [selectedRows, setSelectedRows] = useState([]); 


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
            const response = await axios.get(`http://127.0.0.1:5001/${table}`);
            console.log({table})
            setData(response.data); // update data state
            console.log("Data:", response.data);
            setLoading(false); // set loading state to false after data is fetched
        } catch (error) {
            console.log('Error fetching data: ', error);
            setError('Error fetching data');
            setLoading(false); // stop loading if there's an error
        }
    };

    const handleCheckboxChange = (appoint_id) =>{
      setSelectedRows((prevSelected) => {
        if (prevSelected.includes(appoint_id)) {
          return prevSelected.filter(id => id !== appoint_id);
        }else{
          return [...prevSelected, appoint_id];
        }
      });
    };

    const deleteSelectedRows = async () => {
      try {
          await Promise.all(selectedRows.map(id => axios.delete(`http://127.0.0.1:5001/appointments/${id}`)));
          setData(data.filter(row => !selectedRows.includes(row.appoint_id)));
          setSelectedRows([]);
      } catch (error) {
        setError('Error deleting selected rows: ', error)
        
      }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

        // Function to update status on button click
    const updateOnClick = async (e, table, appointmentId, status) => {
        try {
            console.log('Button is working...');
            console.group(appointmentId)
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
    <>



      <tbody>
      <div className="flex justify-end">
            <button 
                onClick={deleteSelectedRows} 
                disabled={selectedRows.length === 0} 
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">"
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                </svg>            
            </button>
        </div>
      {/*accesses individual  elements of the database */}
        {data.map((row, index) => {
          const { appoint_id, appoint_date, time, patient_name, contact_number, appointment_status } = row;
          
          return (
            <tr key={index}>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox`}
                    type="checkbox"
                    checked={selectedRows.includes(appoint_id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => handleCheckboxChange(appoint_id)}
                  />
                  <label htmlFor={`checkbox-${index}`} className="sr-only">checkbox</label>
                </div>
              </th>
              
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {appoint_id}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {patient_name}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {appoint_date}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {time}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {contact_number} 
              </th>

              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {appointment_status}
              </th>

              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white gap-2">
                <div className="flex justify-center gap-5 items-center">
                  {/* confirm */}
                  <button
                    onClick={(e) => updateOnClick(e, "appointments", appoint_id, statusOne)}
                    type="button"
                    className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 text-white font-bold rounded-full text-sm text-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
                    </svg>
                    {/* {btnName1} */}
                  </button>
                  <button
                    onClick={(e) => updateOnClick(e, "appointments", appoint_id, statusTwo)}
                    type="button"
                    className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 bg-transparent text-black font-bold rounded-full text-sm text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
                    </svg>
                    {/* {btnName2} */}
                  </button>

                  <button
                    onClick={(e) => updateOnClick(e, "appointments", appoint_id, statusThree)}
                    type="button"
                    className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 bg-transparent text-black font-bold rounded-full text-sm text-center"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
                  </svg>
                  </button>
                </div>
              </th>
            </tr>
          );
        })}
      </tbody>
    </>
);
}