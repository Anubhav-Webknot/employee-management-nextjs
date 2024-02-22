'use client'

import React, { useState } from 'react';

const PopupForm = ({ onClose, onSubmit }) => {
  const [employeeData, setEmployeeData] = useState({
    fname: '',
    lname:'',
    role:'',
    email:'',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employeeData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <h2 className="text-lg font-semibold mb-4">Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">First Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={employeeData.fname}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Last Name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={employeeData.lname}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Role:</label>
            <input
              type="text"
              id="role"
              name="role"
              value={employeeData.role}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={employeeData.email}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full"
            />
          </div>
          
          
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
            <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
