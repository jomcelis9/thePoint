import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import Table from "../../../components/table";
import TableBody from "../../../components/ui/TableBody";

export default function ClientManagement() {
    const { open } = useOutletContext();
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

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
    };

    const handleCancelRemove = () => {
        setIsRemoveModalOpen(false);
    };

    return (
        <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 mb-10 border`}>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">List of Clients</h2>
            <div className="overflow-auto max-h-[500px] mb-4"> 
                <Table onRowSelect={handleRowSelect}>
                    <TableBody
                        statusOne={"statusConfirmed"}
                        statusTwo={"statusRejected"}
                        statusThree={"statusPending"}
                        btnName1={"Confirm"}
                        btnName2={"Reject"}
                        fetchDataQuery={"clients"}
                        column1={"client_id"}
                        column2={"name"}
                        column3={"contact"}
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
        </div>
    );
}
    