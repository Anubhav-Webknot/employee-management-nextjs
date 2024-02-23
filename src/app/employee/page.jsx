'use client'

import employees from "../../../data"
import Navbar from "../navbar/page"
import React, { useState } from 'react';
import PopupForm from "@/components/PopupForm";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function Employee(){

  const [showForm, setShowForm] = useState(false);
  
  const handleCreateEmployeeClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmitForm = (employeeData) => {
    
    console.log("Submitted employee data:", employeeData);
    handleCloseForm(); 
  };
    return (
        <>
        <Navbar/>
            <title>Employee</title>
            <main>
            <section className="bg-gray-200  p-3 sm:p-5">
  <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Employees Section</h1>
  <br />
    <div className="bg-green-400 relative shadow-md sm:rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="w-full md:w-auto flex flex-col md:flex-row md:items-center justify-end flex-shrink-0">
          <button
            onClick={handleCreateEmployeeClick}
            type="button"
            className="flex items-center justify-center text-black bg-gray-500 hover:bg-white font-medium rounded-lg text-sm px-4 py-2  "
          >
            <svg
              className="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Add employee
          </button>
          {showForm && <PopupForm onClose={handleCloseForm} onSubmit={handleSubmitForm} />}

        </div>
      </div>
    </div>

    <div className="overflow-x-auto">
        
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-400 uppercase bg-gray-700 ">
          <tr>
            <th scope="col" className="px-4 py-3">
              First Name
            </th>
            <th scope="col" className="px-4 py-3">
              Last Name
            </th>
            <th scope="col" className="px-4 py-3">
              Role
            </th>
            <th scope="col" className="px-4 py-3">
              Email
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
        {employees.map(page => (
            <tr className="border-b border-gray-700" key={page.id}>
              <td scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{page.fname}</td>
              <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{page.lname}</td>
              <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{page.role}</td>
              <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{page.email}</td>
              <td className="px-4 py-3 flex items-center justify-end">

          <div>
          <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Employee</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fname" className="text-right">
              First Name
            </Label>
            <Input id="name" value="Anubhav" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lname" className="text-right">
              Last Name
            </Label>
            <Input id="name" value="Nath" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <Input id="name" value="Software Engineer" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" value="	example@gmail.com" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
          </div>

          <Button variant="destructive">Delete</Button>
            </td>
            </tr>
        ))}
         
        </tbody>
      </table>
    </div>
  </div>
</section>
</main>
        </>
    )
}