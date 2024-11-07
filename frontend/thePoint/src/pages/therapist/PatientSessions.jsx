import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardDefault } from "../../../components/CardDefault";
import axios from "axios";

export default function PatientSessions() {
  const { patient_id } = useParams();
  const [sessions, setSessions] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [selectedSession, setSelectedSession] = useState(null);


  const [formData, setFormData] = useState({
    session_description: "",
    session_title: "",
    session_date: "",
    session_time: "",
    patient_id: ""
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const handleCardClick = (session) => {
    setSelectedSession(session);
    setIsDetailModalOpen(true); // Open the details modal
  };

  const handleButtonClick = () => {
    setIsAddModalOpen(true); // Show the "Add New Session" modal
  };

  const handleCloseModal = async () => {
    if (isDetailModalOpen && selectedSession) {
      try {
        // Update session details
        await axios.put(`http://127.0.0.1:5001/session/${selectedSession.session_id}`, selectedSession, {
          headers: { "Content-Type": "application/json" },
        });
        console.log("Session updated successfully.");
      } catch (error) {
        console.error("Error updating session:", error);
      }
    }

    setIsAddModalOpen(false);
    setIsDetailModalOpen(false);
    setSelectedSession(null); // Clear selected session after closing
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDetailModalInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedSession({ ...selectedSession, [name]: value });
  };

  const uploadDocument = async (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData, patient_id };
    try {
      const response = await fetch(`http://127.0.0.1:5001/session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFormData)
      });
      if (response.ok) {
        console.log("Session added successfully.");
        setIsAddModalOpen(false);
        fetchSessions();
      } else {
        console.error("Failed to insert data");
      }
    } catch (error) {
      console.error(error);
    }
  };

async function updateSession(sessionId, formData) {
    const url = `http://127.0.0.1:5001/session/${sessionId}`;

    try {
        const response = await axios.put(url, formData);
        console.log('Session updated successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating session:', error.response?.data || error.message);
        throw error; // Rethrow the error for further handling if necessary
    }
}

const handleUpdateSession = async () => {
  try {
    console.log("FORM DATA UPDATE: ", formData)
    await updateSession(selectedSession.session_id, formData);
    // Optionally, refresh the session list or notify success
    alert('Session updated successfully!');
    handleCloseModal(); // Close the modal after successful update
  } catch (error) {
    console.error('Error updating session:', error);
    alert('Failed to update session. Please try again.');
  }
};

  const fetchSessions = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5001/patients/patientSessions/${patient_id}`);
      setSessions(response.data.sessions);
      setPatientName(response.data.patient_name);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className="relative">
      <div>
        <h1>{patientName}'s Sessions</h1>
      </div>
      <div className="grid grid-cols-3 gap-10 items-center">
        {sessions.map((session) => (
          <div key={session.session_id} onClick={() => handleCardClick(session)}>
            <CardDefault
              sessionNumber={session.session_id}
              session_date={session.session_date}
              session_time={session.session_time}
              session_description={session.session_description}
              session_title={session.session_title}
            />
          </div>
        ))};

        <button
          type="button"
          className="bg-thePointRed rounded-full w-10 h-10 text-white focus:ring-2 focus:outline-none focus:ring-amber-200 flex items-center justify-center transform active:scale-x-100 transition-transform hover:-translate-y-1 hover:drop-shadow-xl duration-300"
          onClick={handleButtonClick}
        >
          <img src="/src/images/Addicon.png" alt="Add" className="w-6 h-6" />
        </button>

        {isAddModalOpen && (
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
                <input
                  id="session_time"
                  name="session_time"
                  type="time"
                  value={formData.session_time}
                  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  min="09:00"
                  max="18:00"
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex gap-5">
                <button
                  onClick={uploadDocument}
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

      {/* Details Modal */}
      {isDetailModalOpen && selectedSession && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-md">
            <h2 className="text-xl font-bold mb-4">Session Details</h2>

            <div className="grid md:gap-7 rounded-md py-2">
              <div className="relative z-0 w-full group">
                <label htmlFor="session_title">Session Title</label>
                <input
                  id="session_title"
                  name="session_title"
                  type="text"
                  value={selectedSession.session_title}
                  onChange={handleDetailModalInputChange}
                  className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                  placeholder="Session Title"
                />
              </div>
            </div>

            <div className="grid rounded-md py-2 mb-1">
              <div className="relative z-0 w-full group">
                <label>Short Description</label>
                <textarea
                  name="session_description"
                  value={selectedSession.session_description}
                  rows="4"
                  onChange={handleDetailModalInputChange}
                  className="shadow-md rounded-lg w-full text-gray-800 text-sm border-b border-gray-300 focus:border-thePointPink px-2 py-3 outline-none"
                  placeholder="Description"
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
                  value={selectedSession.session_date}
                  onChange={handleDetailModalInputChange}
                  className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <input
                id="session_time"
                name="session_time"
                type="time"
                value={selectedSession.session_time}
                min="09:00"
                max="18:00"
                onChange={handleDetailModalInputChange}
                className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            <div className="flex gap-5">
              <button
                onClick={handleCloseModal}
                className="bg-thePointRed text-white rounded px-4 py-2 my-3"
              >
                Close
              </button>
              <button
                onClick={handleUpdateSession}
                className="bg-thePointRed text-white rounded px-4 py-2 my-3"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
