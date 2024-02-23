'use client'
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React, { useState } from 'react';

const TimesheetPopupForm = ({ onClose, onSubmit }) => {
  const [TimesheetData, setTimesheetData] = useState({
    description: '',
    duration:'',
        
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

  const [date, setDate] = React.useState(new Date());

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <h2 className="text-lg font-semibold mb-4">Add Timesheet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4"> 
            <label className="block mb-2" htmlFor="name">Project Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={TimesheetData.description}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full"
            />
          </div>

          <div className="mb-4"> 
            <label className="block mb-2" htmlFor="name">Description:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={TimesheetData.description}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full"
            />
          </div>

        <div className="mb-4">
        <label className="block mb-2" htmlFor="name">Date:</label>
        <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left border bg-grey-800 font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
        </div>

          
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Duration</label>
            <input
              type="number"
              id="lname"
              name="lname"
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full"
            />
          </div>


          
          
          <form  action="">
            <div  className='flex flex-row space-x-10'>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Employee</label>
            <select name="cars" id="cars">
                <option value="Anubhav">Anubhav</option>
                <option value="Bhuvan">Bhuvan</option>
                <option value="Manish">Manish</option>
                <option value="Naveen">Naveen</option>
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

export default TimesheetPopupForm;
