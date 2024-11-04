import { useEffect,useState, useSortBy } from "react";
import axios from 'axios';
import HeaderRow from '../ui/HeaderRow';

export default function TableBodyTherapist(
  {statusOne,statusTwo,statusThree,
    btnName1,btnName2,fetchDataQuery,
    column1,column2,column3,column4,
    column5,column6,actionable,
    headerOne,headerTwo,headerThree,headerFour,
    headerFive,headerSix,headerSeven,onRowClick,therapist,id

  }){


    const [data, setData] = useState([]); // updates data from any requests
    const [loading, setLoading] = useState(false); // for handling loading state
    const [error, setError] = useState(null); // to handle errors
    const [selectedRows, setSelectedRows] = useState([]); 
    const [isDate, setIsDate ] = useState(false);
    const [isAction, setIsAction ] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [modalData, setModalData] = useState({
      column2: "",
      column3: "",
      column4: "",
      column5: "",
      column6: "",
    });
    const [sortOrder, setSortOrder] = useState('asc');
    const [statusSortOrder, setStatusSortOrder] = useState("normal"); // Possible values: "normal", "confirmed-first", "rejected-first"


    const table = fetchDataQuery;

    useEffect(() =>{
        fetchData(table)
    },[]);
    

    useEffect(() => {
      // Check if columnFour is null or undefined in any of the rows, and update isDate accordingly
      if(actionable === true){  
        setIsAction(true);
      }else{
        setIsAction(false)
      }

    }, [data]);

    useEffect(() => {
      // Check if columnFour is null or undefined in any of the rows, and update isDate accordingly
      const hasValidDate = data.some((row) => row[column4] !== null && row[column4] !== undefined);
      setIsDate(hasValidDate);
    }, [data]);



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

    const handleCheckboxChange = (column1) =>{

      console.log("Column Selected: ", column1)
      setSelectedRows((prevSelected) => {
        if (prevSelected.includes(column1)) {
          return prevSelected.filter(id => id !== column1);
        }else{
          return [...prevSelected, column1];
        }
      });
    };

    const deleteSelectedRows = async (table) => {
      try {
          await Promise.all(selectedRows.map(column_id => axios.delete(`http://127.0.0.1:5001/${table}/${column_id}`)));
          setData(data.filter(row => !selectedRows.includes(row[column1])));
          setSelectedRows([]);
      } catch (error) {
        setError('Error deleting selected rows: ', error)
        
      }

      console.log("Table: ", table)
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

    // converts database format to readable text
    const convertDate = (appoint_date) => {
      try {
        if (appoint_date) {
          const date = new Date(appoint_date);
          return date.toLocaleDateString('en-GB', {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          });
        } else if (appoint_date === null) {
          return "giga";
        }
      } catch (error) {
        console.log('Error formatting date:', error);
      }
    };

  const filteredData = data.filter(row => {
    const rowValues = [column1, column2, column3, column4, column5, column6].map(col => row[col]?.toString().toLowerCase() || "");
    return rowValues.some(value => value.includes(searchTerm.toLowerCase()));
  });
    
   return (
    <>
    <div>
    {/* Tools */}
      <div className="flex">
        <div className="relative mt-1">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input
            type="text"
            id="table-search"
            value={searchTerm} // Bind search term to input value
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
            className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>

        <button 
                onClick={() => deleteSelectedRows(table)} 
                disabled={selectedRows.length === 0} 
                className="">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                </svg>            
        </button>
      </div>
<HeaderRow
  header1={<button onClick={handleSort}> {headerOne} {sortOrder === 'asc' ? '↑' : '↓'}</button>}
  header2={<button onClick={handleSortByName}> {headerTwo} {sortOrder === 'asc' ? '↑' : '↓'}</button>}
  header3={<button onClick={handleSortByTime}> {headerThree} {sortOrder === 'asc' ? '↑' : '↓'}</button>}
  header4={<button onClick={handleSortByDate}> {headerFour} {sortOrder === 'asc' ? '↑' : '↓'}</button>}
  header5={headerFive}
  header6={<button onClick={handleSortByStatus}> {headerSix} {sortOrder === 'asc' ? '↑' : '↓'}</button>}
  header7={headerSeven}
/>

      <tbody>
      <div className="flex justify-end">
        </div>
      {/*accesses individual  elements of the database */}
        {filteredData.map((row, index) => {

          const columnOne = row[column1]; // Always ID
          const columnTwo = row[column2];
          const columnThree = row[column3];
          const columnFour  = row[column4];
          const columnFive = row[column5];
          const columnSix =row[column6];

          return (
            <tr key={index}
            onClick={() => onRowClick(row)}
            className="cursor-pointer hover:bg-gray-100">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox`}
                    type="checkbox"
                    checked={selectedRows.includes(columnOne)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => handleCheckboxChange(columnOne)}
                  />
                  <label htmlFor={`checkbox-${index}`} className="sr-only">checkbox</label>
                </div>
              </th>
              
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {columnOne}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {columnTwo}
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {columnThree}
              </th>

              {isDate && (
                <th className="size-0 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {convertDate(columnFour)}
                </th>
              )}

              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {columnFive} 
              </th>
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {columnSix}
              </th>

          {/* Actionable BUttons */}
                {isAction && (
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white gap-2">
                <div className="flex justify-center gap-5 items-center">
                  {/* confirm */}
                  <button
                    onClick={(e) => updateOnClick(e, "appointments", columnOne, statusOne)}
                    type="button"
                    className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 text-white font-bold rounded-full text-sm text-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path>
                    </svg>
                    {/* {btnName1} */}
                  </button>
                  <button
                    onClick={(e) => updateOnClick(e, "appointments", columnOne, statusTwo)}
                    type="button"
                    className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 bg-transparent text-black font-bold rounded-full text-sm text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
                    </svg>
                    {/* {btnName2} */}
                  </button>

                  <button
                    onClick={(e) => updateOnClick(e, "appointments", columnOne, statusThree)}
                    type="button"
                    className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 bg-transparent text-black font-bold rounded-full text-sm text-center"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
                  </svg>
                  </button>
                </div>
              </th>
                )}
            </tr>
          );
        })}
      </tbody>

      {isModalOpen && selectedRowData && (
        <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-3xl font-bold mb-4 text-black">Client Details</h2>
            <p className="text-black text-lg"><strong>ID:</strong> {selectedRowData.client_id || selectedRowData.appoint_id}</p>
            <div className="mt-2">
              <label className="block mb-1 text-lg font-bold text-black">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={selectedRowData.name || selectedRowData.patient_name}
                    onChange={handleInputChange}
                    className="mt-1 block text-black text-lg w-full border border-gray-300 rounded-md px-3 py-2 pr-10 shadow-sm focus:outline-none focus:ring-thePointPink focus:border-thePointPink sm:text-sm"
                />
              </div>
              <div className="mt-2">
              <label className="block mb-1 text-lg font-bold text-black">Contact:</label>
                <input
                    type="text"
                    name="contact"
                    value={selectedRowData.contact || selectedRowData.contact_number}
                    onChange={handleInputChange}
                    className="mt-1 block text-black text-lg w-full border border-gray-300 rounded-md px-3 py-2 pr-10 shadow-sm focus:outline-none focus:ring-thePointPink focus:border-thePointPink sm:text-sm"
                />
              </div>
              {fetchDataQuery === 'appointments' && ( 
                <>
                  <div className="mt-2">
                    <label className="block mb-1 text-lg font-bold text-black">Time:</label>
                    <input
                      type="text"
                      name="contact"
                      value={selectedRowData.time}
                      onChange={handleInputChange}
                      className="mt-1 block text-black text-lg w-full border border-gray-300 rounded-md px-3 py-2 pr-10 shadow-sm focus:outline-none focus:ring-thePointPink focus:border-thePointPink sm:text-sm"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block mb-1 text-lg font-bold text-black">Date:</label>
                    <input
                      type="text"
                      name="contact"
                      value={selectedRowData.appoint_date}
                      onChange={handleInputChange}
                      className="mt-1 block text-black text-lg w-full border border-gray-300 rounded-md px-3 py-2 pr-10 shadow-sm focus:outline-none focus:ring-thePointPink focus:border-thePointPink sm:text-sm"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block mb-1 text-lg font-bold text-black">Status:</label>
                    <input
                      type="text"
                      name="contact"
                      value={selectedRowData.appointment_status}
                      onChange={handleInputChange}
                      className="mt-1 block text-black text-lg w-full border border-gray-300 rounded-md px-3 py-2 pr-10 shadow-sm focus:outline-none focus:ring-thePointPink focus:border-thePointPink sm:text-sm"
                    />
                  </div>
                  {selectedRowData.appointment_status === 'confirmed' && (
                    <div className="mt-4">
                      <label className="block mb-1 text-lg font-bold text-black">Select Therapist:</label>
                      <select
                        name="option"
                        onChange={handleInputChange}
                        className="mt-1 block text-black text-lg w-full border border-gray-300 rounded-md px-3 py-2 pr-10 shadow-sm focus:outline-none focus:ring-thePointPink focus:border-thePointPink sm:text-sm"
                      >
                        <option value="">-- Choose a Therapist --</option>
                        <option value="option1">Jonathan Rey B. Rebong</option>
                        <option value="option1">Mitchelle James Advincula</option>
                        <option value="option1">Jana Joyce T. Castillo</option>
                        <option value="option1">Paula Salomia</option>
                        <option value="option1">Aileen (to follow apelido hehehe)</option>
                        <option value="option1">Christine Gella</option>
                      </select>
                    </div>
                  )}
                </>
              )}
            <div className="flex justify-end mx-8 space-x-4 mt-4">
              <button
                onClick={() => setIsConfirmationOpen(true)}
                className="bg-gradient-to-r from-thePointRed to-thePointPink text-lg text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 transform active:scale-x-100 transition ease-in duration-300 hover:-translate-y-1 hover:drop-shadow-xl"
              >
                Save Changes 
              </button>
              <button
                className="bg-gradient-to-r from-thePointRed to-thePointPink text-lg text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 transform active:scale-x-100 transition ease-in duration-300 hover:-translate-y-1 hover:drop-shadow-xl"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {isConfirmationOpen && (
        <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-3xl font-bold mb-1 text-black">Confirm Changes</h2>
            <p className="text-black text-base mb-4">Are you sure you want to save these changes?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSaveChanges} // Implement this function to save changes
                className="bg-gradient-to-r from-thePointRed to-thePointPink text-lg text-white bg-primary-600 focus:ring-2 focus:outline-none focus:ring-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 transform active:scale-x-100 transition ease-in duration-300 hover:-translate-y-1 hover:drop-shadow-xl"
              >
                Yes, Save
              </button>
              <button
                onClick={() => setIsConfirmationOpen(false)} // Close confirmation modal
                className="bg-gray-300 text-lg text-black font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
);
}