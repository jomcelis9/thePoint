import { useState } from "react";
import Table from "../../../components/table"; 
import TableBody from "../../../components/ui/TableBody";

export default function Settings() {
    const [userData, setUserData] = useState([
        { id: 1, username: 'Japmar solante', password: '123123' },
        { id: 2, username: 'Japmar123', password: '123123' },
        { id: 3, username: 'Japmar solante', password: '123123' },
        { id: 4, username: 'Japmar solante', password: '123123' },
        { id: 5, username: 'Japmar solante', password: '123123' },
    ]);

    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [editedUser, setEditedUser] = useState({ id: null, username: '', password: '' });

    const handleRowSelect = (user) => {
        setSelectedUser(user);
        setEditedUser(user); // Set the edited user to the selected user for editing
    };

    const handleRemoveClick = () => {
        if (selectedUser) {
            setIsRemoveModalOpen(true);
        }
    };

    const handleEditClick = () => {
        if (selectedUser) {
            setIsEditModalOpen(true);
        }
    };

    const handleConfirmRemove = () => {
        // Logic for removing the user
        setUserData((prevUsers) => prevUsers.filter(user => user.id !== selectedUser.id));
        setIsRemoveModalOpen(false);
        setSelectedUser(null);
    };

    const handleCancelRemove = () => {
        setIsRemoveModalOpen(false);
    };

    const handleSaveEdit = () => {
        setUserData((prevUsers) => prevUsers.map(user => user.id === editedUser.id ? editedUser : user));
        setIsEditModalOpen(false);
        setSelectedUser(null);
    };

    const handleCancelEdit = () => {
        setIsEditModalOpen(false);
    };

    return (
        <div className="flex items-center justify-center h-screen p-6">
            <div
                className="bg-white shadow-lg rounded-lg p-8 w-full h-full max-w-6xl"
                style={{ position: 'relative' }}
            >
                <h1 className="text-4xl font-sans font-bold text-gray-800 mb-8 mt-4">Settings</h1>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border rounded-md" style={{ ...boxStyles, padding: '0.5rem' }}>
                        <label className="text-gray-500 text-sm">First Name</label>
                        <p className="text-xl font-bold ml-2">Jhun Mar</p>
                    </div>
                    <div className="border rounded-md" style={{ ...boxStyles, padding: '0.5rem' }}>
                        <label className="text-gray-500 text-sm">Last Name</label>
                        <p className="text-xl font-bold ml-2">Dolorito</p>
                    </div>
                    <div className="border rounded-md" style={{ ...boxStyles, padding: '0.5rem' }}>
                        <label className="text-gray-500 text-sm">Email</label>
                        <p className="text-xl font-bold ml-2">jmardolorito@pogi.com</p>
                    </div>
                    <div className="border rounded-md" style={{ ...boxStyles, padding: '0.5rem' }}>
                        <label className="text-gray-500 text-sm">Contact No.</label>
                        <p className="text-xl font-bold ml-2">09912872387</p>
                    </div>
                    <div className="border rounded-md" style={{ ...boxStyles, padding: '0.5rem' }}>
                        <label className="text-gray-500 text-sm">Address</label>
                        <p className="text-xl font-bold ml-2">Matina Crossing, Davao City</p>
                    </div>
                    <div className="border rounded-md" style={{ ...boxStyles, padding: '0.5rem' }}>
                        <label className="text-gray-500 text-sm">Birthdate</label>
                        <p className="text-xl font-bold ml-2">September 25, 2024</p>
                    </div>
                    <div className="border rounded-md" style={{ ...boxStyles, padding: '0.5rem' }}>
                        <label className="text-gray-500 text-sm">Password</label>
                        <p className="text-xl font-bold ml-2">**********</p>
                    </div>
                </div>

            <div className="fixed bottom-8 right-8 flex space-x-4 z-10">
                <button
                    id="Addbtn"
                    type="button"
                    onClick={handleEditClick}
                    className="bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 px-4 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg hover:drop-shadow-xl"
                    disabled={!selectedUser}
                >
                    Add
                </button>
                <button
                    id="Editbtn"
                    type="button"
                    onClick={handleEditClick}
                    className="bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 px-4 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg hover:drop-shadow-xl"
                    disabled={!selectedUser}
                >
                    Edit
                </button>
                <button
                    id="Removebtn"
                    type="button"
                    onClick={handleRemoveClick}
                    className="bg-gradient-to-r from-thePointPink to-thePointRed text-white py-2 px-4 active:bg-primary-600 focus:outline-none focus:ring focus:ring-amber-200 rounded-lg hover:drop-shadow-xl"
                    disabled={!selectedUser}
                >
                    Remove
                </button>
            </div>

            {isRemoveModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Confirm Removal</h2>
                        <p>Are you sure you want to remove the user {selectedUser?.username}?</p>
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

            {isEditModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Edit User</h2>
                        <label className="block mb-2">Username</label>
                        <input
                            type="text"
                            value={editedUser.username}
                            onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
                            className="border border-gray-300 p-2 rounded mb-4 w-full"
                        />
                        <label className="block mb-2">Password</label>
                        <input
                            type="password"
                            value={editedUser.password}
                            onChange={(e) => setEditedUser({ ...editedUser, password: e.target.value })}
                            className="border border-gray-300 p-2 rounded mb-4 w-full"
                        />
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleSaveEdit}
                                className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleCancelEdit}
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
