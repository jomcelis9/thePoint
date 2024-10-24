import { useState } from "react";

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
    // Add other patient objects here...
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleRowClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleBackClick = () => {
    setSelectedPatient(null);
  };

  return (
    <div className="gap-1 border-2 rounded-xl p-5 flex flex-col my-5 bg-gray-50">
      <div className="p-12 max-w-full mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">List of Clients</h2>

        {!selectedPatient ? (
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-medium text-gray-800">CLIENT NAME</th>
                  <th className="px-6 py-4 text-left text-lg font-medium text-gray-800">THERAPIST</th>
                  <th className="px-6 py-4 text-left text-lg font-medium text-gray-800">DATE OF THERAPY</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr
                    key={index}
                    className="border-t cursor-pointer hover:bg-gray-100"
                    onClick={() => handleRowClick(patient)}
                  >
                    <td className="px-6 py-4 text-lg text-gray-800">
                      <input
                        type="text"
                        value={patient.clientName}
                        readOnly
                        className="w-full bg-transparent border-none focus:outline-none text-gray-800"
                      />
                    </td>
                    <td className="px-6 py-4 text-lg text-gray-800">
                      <input
                        type="text"
                        value={patient.therapist}
                        readOnly
                        className="w-full bg-transparent border-none focus:outline-none text-gray-800"
                      />
                    </td>
                    <td className="px-6 py-4 text-lg text-gray-800">
                      <input
                        type="text"
                        value={patient.dateOfTherapy}
                        readOnly
                        className="w-full bg-transparent border-none focus:outline-none text-gray-800"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Medical Report Form</h1>
            <form className="space-y-6">
              {/* Full Name and Contact Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Client's Full Name *</label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={selectedPatient.clientName}
                      className="shadow-md rounded-lg w-full text-gray-800 text-sm border border-gray-300 focus:border-thePointPink px-4 py-2 outline-none"
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                  <input
                    name="contactNumber"
                    type="text"
                    value={selectedPatient.contactNumber}
                    className="shadow-md rounded-lg w-full text-gray-800 text-sm border border-gray-300 focus:border-thePointPink px-4 py-2 outline-none mb-4"
                    readOnly
                  />
                </div>
              </div>

              {/* Date of Therapy and Therapist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Therapist</label>
                  <input
                    type="text"
                    value={selectedPatient.therapist}
                    className="shadow-md rounded-lg w-full text-gray-800 text-sm border border-gray-300 focus:border-thePointPink px-4 py-2 outline-none"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Therapy</label>
                  <input
                    type="text"
                    value={selectedPatient.dateOfTherapy}
                    className="shadow-md rounded-lg w-full text-gray-800 text-sm border border-gray-300 focus:border-thePointPink px-4 py-2 outline-none"
                    readOnly
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
    </div>
  );
}
