import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardDefault } from "../../../components/CardDefault";
import axios from "axios";

export default function PatientSessions() {
  const { patient_id } = useParams(); // Get the patient_id from the URL
  const [sessions, setSessions] = useState([]);
  const [patientName, setPatientName] = useState("");


// Fetch the sessions for the given patient_id

  const fetchSessions = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5001/session/patientSessions/${patient_id}`);
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
    <div className="relative">
      <div className="flex justify-center">
        <h1>{patientName} 's Sessions</h1>
      </div>
        <div>
        {sessions.map((session) => (
          <CardDefault
            key={session.session_id}
            sessionNumber={session.session_id}
            patientName={patientName}
            sessionDate={session.session_date}  // Adjust this based on your backend field names
            sessionTime={session.session_time}
            sessionType={session.session_type}
            sessionDescription={session.session_description}
          />
        ))}
      </div>
    </div>
  );
}
