import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useOutletContext } from "react-router-dom";
import Table from "../../../components/table";
import TableBody from "../../../components/ui/TableBody";
import TableBodyTherapist from "../../../components/ui/TableBodyTherapist";

export default function Session() {
  const { open } = useOutletContext();
  const navigate = useNavigate(); // Initialize the navigate hook
  const statusConfirmed = "confirmed";
  const statusRejected = "rejected";
  const statusPending  = "pending";

  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clientData, setClientData] = useState({ patient_id: ''});

  const handleRowClick = (clientData) => {
    setSelectedClient(clientData);
    setClientData({ patient_id: clientData.patient_id });
    console.log("client id: ", clientData.patient_id);
    // Navigate using client_id instead of name
    navigate(`/therapist/patients/patientSessions/${clientData.patient_id}`);
  };  


  return (
    <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 border`}>
      <div className="relative">
        <h1 className="text-xl mb-3"> Patients </h1> 
        <Table>
          <TableBodyTherapist
            statusOne={statusConfirmed} 
            statusTwo={statusRejected} 
            statusThree={statusPending}
            btnName1="Confirm" 
            btnName2="Reject"
            fetchDataQuery="patient"
            // column1="session_id"  
            column1="patient_name"
            column2="appoint_id"  
            actionable={false}
            headerOne="Patient Name"
            onRowClick={handleRowClick} 
            id={"patient_id"}// Pass the handleRowClick function to TableBody
          />
        </Table>
      </div>
    </div>
  );
}
