import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardDefault } from "../../../components/CardDefault";
import axios from "axios";
import TimePicker from 'react-time-picker';


export default function PatientSessions() {
  const { patient_id } = useParams(); // Get the patient_id from the URL
  const [sessions, setSessions] = useState([]);
  const [patientName, setPatientName] = useState("");


  const [formData, setFormData] = useState({
    session_description: "",
    session_title: "",
    session_date: "",
    session_time: "",
    patient_id: ""
  });




  const uploadDocument = async (e) => {
    e.preventDefault();
    
    // Use patient_id directly from URL params
    const updatedFormData = { ...formData, patient_id: patient_id };
    
    console.log("FORM DATA: ", updatedFormData); // Log the updated formData

    try {
        const response = await fetch(`http://127.0.0.1:5001/session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedFormData)
        });
        
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            // navigate("/payment"); // Navigate to the payment page after successful submission
        } else {
            console.error("Failed to insert data");
        }
    } catch (error) {
        console.error(error);
    }
};




  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true); // Show the modal when button is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  // Fetch the sessions for the given patient_id
  const fetchSessions = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5001/patients/patientSessions/${patient_id}`);
      setSessions(response.data.sessions);
      setPatientName(response.data.patient_name); // Assuming API returns patient's name
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-center">
        <h1>{patientName}'s Sessions</h1>
      </div>
      <div className="flex gap-10 items-center">
        {sessions.map((session) => (
          <CardDefault
            key={session.session_id}
            sessionNumber={session.session_id}
            patientName={patientName}
            session_date={session.session_date}
            sessionTime={session.session_time}
            sessionType={session.session_type}
            session_description={session.session_description}
          />
        ))}
        
        <button
          type="button"
          className="bg-thePointRed rounded-full w-10 h-10 text-white focus:ring-2 focus:outline-none focus:ring-amber-200 flex items-center justify-center transform active:scale-x-100 transition-transform hover:-translate-y-1 hover:drop-shadow-xl duration-300"
          onClick={handleButtonClick}
        >
          <img src="/src/images/Addicon.png" alt="Add" className="w-6 h-6" />
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-md">
              <h2 className="text-xl font-bold mb-4">New Session</h2>

              <div className="grid md:gap-7 rounded-md py-2">
                <div className="relative z-0 w-full group">
                  <label htmlFor="session_title">Session Title</label>
                  <input
                    id="session_title"
                    name="session_title"
                    type="text"
                    value={formData.session_title}
                    required
                    className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                    placeholder="Session Title"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid rounded-md py-2 mb-1">
                <div className="relative z-0 w-full group">
                  <label>Short Description</label>
                  <textarea
                    name="session_description"
                    value={formData.session_description}
                    required
                    rows="4"
                    className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                    placeholder="Description"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex gap-5 mb-5">
                <div className="w-full">
                  <label htmlFor="session_date" className="block mb-2 text-sm font-medium text-gray-900">Date:</label>
                  <input
                    id="session_date"
                    name="session_date"
                    type="date"
                    value={formData.session_date}
                    className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={handleInputChange}
                  />
                </div>
                <input id="session_time" name="session_time" value={formData.session_time}type="time" className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" min="09:00" max="18:00" onChange={handleInputChange} />
              </div>

              <div className="flex gap-5">
                            <button onClick={uploadDocument}
                              type="submit"
                              className="bg-thePointRed text-white rounded px-4 py-2 my-3"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              className="bg-thePointRed text-white rounded px-4 py-2 my-3"
                              onClick={handleCloseModal}
                            >
                              Close
                            </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
