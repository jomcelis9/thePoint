import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import Table from "../../../components/table";

export default function ClientManagement() {
    const { open } = useOutletContext();
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
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

    const handleUpdateClick = () => {
        if (selectedAppointment) {
            setIsUpdateModalOpen(true);
        }
    };

    const handleConfirmUpdate = () => {
        setIsUpdateModalOpen(false);
    };

    const handleCancelUpdate = () => {
        setIsUpdateModalOpen(false);
    };

    return (
        <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 border`}>
            <Table onRowSelect={handleRowSelect} />

            <div className="absolute bottom-8 right-10">
                <button
                    id="Removebtn"
                    type="button"
                    onClick={handleRemoveClick}
                    className="bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 px-4 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 text-center rounded-lg text-center mr-8 hover:drop-shadow-xl px-8"
                    disabled={!selectedAppointment}
                >
                    Remove
                </button>
                <button
                    id="Updatebtn"
                    type="button"
                    onClick={handleUpdateClick}
                    className="bg-gradient-to-r from-thePointRed to-thePointPink text-white py-2 px-4 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 text-center rounded-lg text-center hover:drop-shadow-xl px-8"
                    disabled={!selectedAppointment}
                >
                    Update
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

            {isUpdateModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Update Appointment</h2>
                        <p>
                            Are you sure you want to update the appointment for{" "}
                            {selectedAppointment?.firstName} {selectedAppointment?.lastName}?
                        </p>
                        <div className="mt-4">
                            <button
                                onClick={handleConfirmUpdate}
                                className="bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 px-4 rounded-lg mr-2"
                            >
                                Yes, Update
                            </button>
                            <button
                                onClick={handleCancelUpdate}
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
