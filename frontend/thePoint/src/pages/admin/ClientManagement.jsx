import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // Import axios
import Table from "../../../components/table";
import TableBody from "../../../components/ui/TableBody";


export default function ClientManagement() {
    const { open } = useOutletContext();
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [isClientModalOpen, setIsClientModalOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);
    const [clientData, setClientData] = useState({ name: '', contact: '' });

    const handleRowClick = (clientData) => {
        setSelectedClient(clientData);
        setClientData({ name: clientData.name, contact: clientData.contact });
        setIsClientModalOpen(true);
    };

    const handleRowSelect = (appointment) => {
        setSelectedAppointment(appointment);
    };

    const handleRemoveClick = () => {
        if (selectedAppointment) {
            setIsRemoveModalOpen(true);
        }
    };

    const handleConfirmRemove = () => {
        setIsRemoveModalOpen(false);
        // Add logic to remove the appointment
    };

    const handleCancelRemove = () => {
        setIsRemoveModalOpen(false);
    };

    const handleCloseClientModal = () => {
        setIsClientModalOpen(false);
        setSelectedClient(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSaveChanges = async () => {
        try {
            const updatedData = {
                name: clientData.name.trim(),
                contact: clientData.contact.trim()
            };
    
            console.log("Payload being sent:", updatedData);
    
            // Assuming the endpoint for updating with POST is /api/clients/:id/update
            const response = await axios.put(
                `http://127.0.0.1:5001/clients/${selectedClient.client_id}`,
                updatedData
            );
    
            console.log("Response from server:", response.data);
            setIsClientModalOpen(false); // Close modal on success
        } catch (error) {
            console.error("Error updating client data:", error);
        }
    };
    

    return (
        <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 mb-10 border`}>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">List of Clients</h2>
            <div className="overflow-auto max-h-[500px] mb-4"> 
                <Table>
                    <TableBody
                        statusOne={"statusConfirmed"}
                        statusTwo={"statusRejected"}
                        statusThree={"statusPending"}
                        btnName1={"Confirm"}
                        btnName2={"Reject"}
                        fetchDataQuery={"users"}
                        column1={"user_id"}
                        column2={"name"}
                        column3={"email"}
                        column4={null}
                        headerOne={"Client ID"}
                        headerTwo={"Name"}
                        headerThree={"Contact Number"}
                    />
                </Table>
            </div>


            <div className="fixed bottom-8 right-8 flex space-x-4 z-10">
                <button
                    id="Removebtn"
                    type="button"
                    onClick={handleRemoveClick}
                    className="bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 px-4 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg hover:drop-shadow-xl"
                    disabled={!selectedAppointment}
                >
                    Remove
                </button>
            </div>

            {/* Remove Confirmation Modal */}
            {isRemoveModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Confirm Removal</h2>
                        <p>
                            Are you sure you want to remove the appointment for{" "}
                            {selectedAppointment?.firstName} {selectedAppointment?.lastName}?
                        </p>
                        <div className="mt-4">
                            <button
                                onClick={handleConfirmRemove}
                                className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2"
                            >
                                Yes, Remove
                            </button>
                            <button
                                onClick={handleCancelRemove}
                                className="bg-gray-300 text-black py-2 px-4 rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Client Details Modal */}
            {isClientModalOpen && selectedClient && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Client Details</h2>
                        <p><strong>Client ID:</strong> {selectedClient.client_id}</p>
                        <div className="mt-2">
                            <label className="block mb-1">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={clientData.name}
                                onChange={handleInputChange}
                                className="border rounded px-2 py-1 w-full"
                            />
                        </div>
                        <div className="mt-2">
                            <label className="block mb-1">Contact Number:</label>
                            <input
                                type="text"
                                name="contact"
                                value={clientData.contact}
                                onChange={handleInputChange}
                                className="border rounded px-2 py-1 w-full"
                            />
                        </div>
                        <div className="mt-4 flex space-x-2">
                            <button
                                onClick={handleSaveChanges}
                                className="bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 px-4 rounded-lg"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={handleCloseClientModal}
                                className="bg-gray-300 text-black py-2 px-4 rounded-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

              </div>
    );
}
