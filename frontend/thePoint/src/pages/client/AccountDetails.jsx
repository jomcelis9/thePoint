import React, { useState } from 'react';

export default function AccountDetailsPage() {
  const [isEditing, setIsEditing] = useState(false);

  const boxStyles = {
    width: '350px',
    height: '80px',
    borderColor: '#F9DDBA',
    borderWidth: '2px',
    marginTop: '0.5rem',
    marginLeft: '1rem',
  };
  //Account Details

  const handleEditClick = () => {
    setIsEditing(true);
  };    

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-r from-thePointRed to-thePointPink">
      <div 
        className="bg-white shadow-lg rounded-lg mt-10 p-2"
        style={{
          width: '800px',   
          height: '600px',
          marginTop: '10rem',
        }}
      >
        <h1 className="text-4xl font-sans font-bold text-gray-800 mb-8 mt-4">Account Details</h1>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div
            className="border rounded-md"
            style={{ ...boxStyles, padding: '0.5rem', border: `${boxStyles.borderWidth} solid ${boxStyles.borderColor}` }}
          >
            <label className="text-gray-500 text-sm">First Name</label>
            <p className="text-xl font-bold ml-2">Jhun Mar</p>
          </div>
          <div
            className="border rounded-md"
            style={{ ...boxStyles, padding: '0.5rem', border: `${boxStyles.borderWidth} solid ${boxStyles.borderColor}` }}
          >
            <label className="text-gray-500 text-sm">Last Name</label>
            <p className="text-xl font-bold ml-2">Dolorito</p>
          </div>
          <div
            className="border rounded-md"
            style={{ ...boxStyles, padding: '0.5rem', border: `${boxStyles.borderWidth} solid ${boxStyles.borderColor}` }}
          >
            <label className="text-gray-500 text-sm">Email</label>
            <p className="text-xl font-bold ml-2">jmardolorito@pogi.com</p>
          </div>
          <div
            className="border rounded-md"
            style={{ ...boxStyles, padding: '0.5rem', border: `${boxStyles.borderWidth} solid ${boxStyles.borderColor}` }}
          >
            <label className="text-gray-500 text-sm">Contact No.</label>
            <p className="text-xl font-bold ml-2">09912872387</p>
          </div>
          <div
            className="border rounded-md"
            style={{ ...boxStyles, padding: '0.5rem', border: `${boxStyles.borderWidth} solid ${boxStyles.borderColor}` }}
          >
            <label className="text-gray-500 text-sm">Address</label>
            <p className="text-xl font-bold ml-2">Matina Crossing, Davao City</p>
          </div>
          <div
            className="border rounded-md"
            style={{ ...boxStyles, padding: '0.5rem', border: `${boxStyles.borderWidth} solid ${boxStyles.borderColor}` }}
          >
            <label className="text-gray-500 text-sm">Birthdate</label>
            <p className="text-xl font-bold ml-2">September 25, 2024</p>
          </div>
          <div
            className="border rounded-md"
            style={{ ...boxStyles, padding: '0.5rem', border: `${boxStyles.borderWidth} solid ${boxStyles.borderColor}` }}
          >
            <label className="text-gray-500 text-sm">Password</label>
            <p className="text-xl font-bold ml-2">**********</p>
          </div>
        </div>

        {!isEditing && (
          <button
            className="text-white font-medium rounded-[25px] text-sm px-10 py-2 transform transition-transform hover:-translate-y-1 hover:shadow-xl duration-300"
            style={{
              background: 'linear-gradient(90deg, #F91F1F 34%, #FF0085 89%)',
              position: 'absolute',
              bottom: '30px',
              left: '1000px',
            }}
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}

        {isEditing && (
          <div style={{ position: 'absolute', bottom: '30px', left: '850px' }}>
            <button
              className="text-white font-medium rounded-[25px] text-sm px-10 py-2 mr-2"
              style={{ background: '#728394' }}
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              className="text-white font-medium rounded-[25px] text-sm px-10 py-2"
              style={{
                background: 'linear-gradient(90deg, #F91F1F 34%, #FF0085 89%)',
              }}
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

