import { useEffect, useState } from "react"
import axios from 'axios'

export default function Table(){

    const[appointments, setAppointments] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/getAppointment')
        .then(appointments => setAppointments(appointments.data))
        .catch(err => console.log(err))
    },[])

return(
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead>
        <tr>
            <th>
                FIRST NAME
            </th>
            <th>
                LAST NAME
            </th>
            <th>
                CONTACT #
            </th>
            <th>
                APPOINTMENT #
            </th>
            <th>
                Preferred Date
            </th>
            <th>
                Preferred Time
            </th>
            <th >
                Action
            </th>
        </tr>
    </thead>

        {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    FIRST NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    LAST NAME 
                </th>
                <th scope="col" class="px-6 py-3">
                    CONTACT #
                </th>
                <th scope="col" class="px-6 py-3">
                    APPOINTMENT #
                </th>
                <th scope="col" class="px-6 py-3">
                    Preferred Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Preferred Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>

        </thead> */}

        
        {/* records */}

        <tbody>
            {
                appointments.map(appointment => {
                return <tr>
                        <td>{appointment.firstName}</td>
                        <td>{appointment.lastName}</td>
                        <td>{appointment.contactNumber}</td>
                        <td>{appointment.appointmentNumber}</td>
                        <td>{appointment.appointmentDate}</td>
                        <td>{appointment.appointmentTime}</td>
                        <td>{appointment.appointmentStatus}</td>
                    </tr>

                })
            }
        </tbody>
        {/* <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Juan
                </th>
                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Dela Cruz
                </th>
                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    09468138079
                </th>
                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1234567890
                </th>
                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    09/11/2024
                </th>
                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    69:00
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white gap-2 ">
                    <div className="flex justify-center items-center" >
                        <button
                        type="button"
                        className="transform active:scale-x-100 transition-transform transition ease-in-out delay-150 hover:-translate-y-1 duration-300 
                        shadow-md bg-gradient-to-r from-thePointRed to-thePointPink text-white font-bold rounded-full text-sm px-2 py-1 
                        text-center mr-7">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                            <path d="M19.2803 6.76264C19.5732 7.05553 19.5732 7.53041 19.2803 7.8233L9.86348 17.2402C9.57058 17.533 9.09571 17.533 8.80282 17.2402L4.71967 13.157C4.42678 12.8641 4.42678 12.3892 4.71967 12.0963C5.01256 11.8035 5.48744 11.8035 5.78033 12.0963L9.33315 15.6492L18.2197 6.76264C18.5126 6.46975 18.9874 6.46975 19.2803 6.76264Z" fill="#ffffff"/>
                            </svg>
                        </button>  

                        <button
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
        </tbody> */}

    </table>

    <h1> TABLe</h1>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">

    </button>


    </div>
)

}
