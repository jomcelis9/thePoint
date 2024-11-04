import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardDefault } from "../../../components/CardDefault";
import axios from "axios";

export default function PatientSessions() {
  const { patient_id } = useParams(); // Get the patient_id from the URL
  const [sessions, setSessions] = useState([]);
  const [patientName, setPatientName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true); // Show the modal when button is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };


// Fetch the sessions for the given patient_id

  const fetchSessions = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5001/patients/patientSessions/${patient_id}`);
      setSessions(response.data.sessions);
      setPatientName(response.data.patient_name); // Assuming API returns patient's name
      console.log("fetchSessions: ", response.data.patient_name);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };


    useEffect(() =>{
        fetchSessions();
    },[])

  return (
    <div className=" ">
      <div className="flex justify-center">
        <h1>{patientName} 's Sessions</h1>
      </div>
          <div className="flex gap-10 items-center">  {/* Changed justify-left to justify-center */}
      {sessions.map((session) => (
        <CardDefault
          key={session.session_id}
          sessionNumber={session.session_id}
          patientName={patientName}
          session_date={session.session_date}  // Adjust this based on your backend field names
          sessionTime={session.session_time}
          sessionType={session.session_type}
          session_description={session.session_description}
        />
      ))}
      
      <button
        type="button"
        className="bg-thePointRed rounded-full w-10 h-10 text-white focus:ring-2 focus:outline-none focus:ring-amber-200 flex items-center justify-center transform active:scale-x-100 transition-transform hover:-translate-y-1 hover:drop-shadow-xl duration-300"
        onClick={handleButtonClick} // Show modal on click
      >
        <img src="/src/images/Addicon.png" alt="Add" className="w-6 h-6" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-md">
            <h2 className="text-xl font-bold mb-4">New Session</h2>
            
            <p className="text-gray-600 mb-6">This is the content of the modal.</p>
            <button
              type="button"
              className="bg-thePointRed text-white rounded px-4 py-2"
              onClick={handleCloseModal} // Close modal on button click
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
