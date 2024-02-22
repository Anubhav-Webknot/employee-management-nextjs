'use client'

import React, { useState } from 'react';

const ProjectPopupForm = ({ onClose, onSubmit }) => {
  const [projectData, setProjectData] = useState({
    pname: '',
    category:'',
    role:'',
    
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
            <label className="block mb-2" htmlFor="name">Project Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={projectData.pname}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Category</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={projectData.category}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full"
            />
          </div>
          
          
          <form  action="">
            <div  className='flex flex-row space-x-10'>

            
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Employees</label>
            <select name="cars" id="cars">
                <option value="Anubhav">Anubhav</option>
                <option value="Bhuvan">Bhuvan</option>
                <option value="Manish">Manish</option>
                <option value="Naveen">Naveen</option>
            </select>
            </div>
             <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Roles</label>
            <select name="cars" id="cars">
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
                <option value="Lead">Lead</option>
            </select>
          
          </div>
          </div>
          </form>
         
          
          
          
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
            <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectPopupForm;
