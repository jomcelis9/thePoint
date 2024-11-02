import { useState } from "react";
import Table from "../../../components/table"; // Ensure correct import path
import TableBody from "../../../components/ui/TableBody";

export default function Settings() {
    const [userData, setUserData] = useState([
        { id: 1, username: 'user1', password: 'password1' },
        { id: 2, username: 'user2', password: 'password2' },
        { id: 3, username: 'user3', password: 'password3' },
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
        <div className="p-4 transition-all duration-300 mt-20 mb-10 border">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Account Details</h2>
            <div className="overflow-auto max-h-[500px] mb-4">
                <Table>
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">User</th>
                            <th className="border px-4 py-2">Password</th>
                        </tr>
                    </thead>
                    <TableBody>
                        {userData.map((user) => (
                            <tr key={user.id} onClick={() => handleRowSelect(user)} className="hover:bg-gray-100 cursor-pointer">
                                <td className="border px-4 py-2">{user.id}</td>
                                <td className="border px-4 py-2">{user.username}</td>
                                <td className="border px-4 py-2">**********</td>
                            </tr>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="fixed bottom-8 right-8 flex space-x-4 z-10">
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
