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
        <h2 className="text-4xl font-bold mb-8 text-gray-900">List of Clients</h2>

        {!selectedPatient ? (
          <Table>
            <HeaderRow columns={["CLIENT NAME", "THERAPIST", "DATE OF THERAPY"]} />
            <TableBody
              data={patients}
              fields={["clientName", "therapist", "dateOfTherapy"]}
              renderRow={(patient) => (
                <tr
                  key={patient.clientName}
                  className="border-t cursor-pointer hover:bg-gray-100"
                  onClick={() => handleRowClick(patient)}
                >
                  <td className="px-6 py-4 text-lg text-gray-800">
                    <input
                      type="text"
                      value={patient.clientName}
                      readOnly
                      className="w-full bg-transparent border-none focus:outline-none text-gray-800 cursor-pointer"
                    />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-800">{patient.therapist}</td>
                  <td className="px-6 py-4 text-lg text-gray-800">{patient.dateOfTherapy}</td>
                </tr>
              )}
            />
          </Table>
        ) : (
          <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Medical Report Form</h1>
            {/* Patient Detail Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Client's Full Name *</label>
                  <input
                    type="text"
                    value={selectedPatient.clientName}
                    readOnly
                    className="shadow-md rounded-lg w-full text-gray-800 text-sm border border-gray-300 focus:border-thePointPink px-4 py-2 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                  <input
                    type="text"
                    value={selectedPatient.contactNumber}
                    readOnly
                    className="shadow-md rounded-lg w-full text-gray-800 text-sm border border-gray-300 focus:border-thePointPink px-4 py-2 outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Therapist</label>
                  <input
                    type="text"
                    value={selectedPatient.therapist}
                    readOnly
                    className="shadow-md rounded-lg w-full text-gray-800 text-sm border border-gray-300 focus:border-thePointPink px-4 py-2 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Therapy</label>
                  <input
                    type="text"
                    value={selectedPatient.dateOfTherapy}
                    readOnly
                    className="shadow-md rounded-lg w-full text-gray-800 text-sm border border-gray-300 focus:border-thePointPink px-4 py-2 outline-none"
                  />
                </div>
              </div>
            </form>
            <button
              className="mt-8 bg-thePointRed text-white font-bold px-6 py-3 rounded-md shadow-lg hover:bg-red-700 transition duration-300"
              onClick={handleBackClick}
            >
              Back to List
            </button>
          </div>
        )}
      </div>
      {/* About Section sample again*/}
    </div>
  );
}
