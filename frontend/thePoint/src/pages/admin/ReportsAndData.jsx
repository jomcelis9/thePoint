import { useState } from "react";
import Table from "../../../components/table";
import HeaderRow from '../../../components/ui/HeaderRow';
import TableBody from "../../../components/ui/TableBody";

export default function ReportsAndData() {
  const [patients, setPatients] = useState([
    {
      clientName: "John Doe",
      therapist: "Dr. Smith",
      dateOfTherapy: "2024-10-30",
      contactNumber: "(000) 123-4567",
      email: "johndoe@example.com",
    },
    {
      clientName: "Jane Roe",
      therapist: "Dr. Brown",
      dateOfTherapy: "2024-11-02",
      contactNumber: "(000) 987-6543",
      email: "janeroe@example.com",
    },
 
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleRowClick = (patient) => {
    setSelectedPatient(patient); 
  };

  const handleBackClick = () => {
    setSelectedPatient(null); 
  };

  return (
    <div className="p-4 transition-all duration-300 mt-20 border bg-gray-50 rounded-xl shadow-md">
      <div>
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Clinic Staff</h2>
        <Table>

          <TableBody
          
          fetchDataQuery={"therapist"}
          column1={"therapist_id"}
          column2={"therapist_name"}
          column3={"therapist_number"}
          column4={"therapist_age"}
          headerOne={"ID"}
          headerTwo={"Name"}
          headerThree={"Contact"}
          headerFour={"Hire Date"}
          actionable={false}
          id = {'therapist_id'}

          />

          
        </Table>
      </div>
    </div>
  );
}
