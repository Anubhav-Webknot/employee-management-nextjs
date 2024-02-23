'use client'
import Navbar from "../navbar/page"
import React, { useState } from 'react';
import timesheetdata from "../../../timesheetdata.json"
import TimesheetPopupForm from "@/components/TimesheetPopupForm";
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
  


export default function Timesheet(){
    const [position, setPosition] = React.useState("bottom")
    const [showForm, setShowForm] = useState(false);
    

    const handleCreateEmployeeClick = () => {
        setShowForm(true);
      };
    
      const handleCloseForm = () => {
        setShowForm(false);
      };
      
      const handleSubmitForm = (TimesheetData) => {
        
        console.log("Submitted employee data:", TimesheetData);
        handleCloseForm(); 
      };

      const [date, setDate] = React.useState(new Date());


    return (
        <>
        <Navbar/>
        <title>Timesheet</title>
        <main>
        <section className="bg-gray-200  p-3 sm:p-5">
  <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Timesheets</h1>

  <div className="div flex flex-row gap-32">
    <div className="div">
    <DropdownMenu>
<DropdownMenuTrigger asChild>
  <Button variant="outline">Select Employee</Button>
</DropdownMenuTrigger>
<DropdownMenuContent className="w-56">
  <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
    <DropdownMenuRadioItem value="top">Anubhav</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="bottom">Bhuvan</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="right">Manish</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="right">Naveen</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="right">Aditya</DropdownMenuRadioItem>
  </DropdownMenuRadioGroup>
</DropdownMenuContent>
</DropdownMenu> 
    </div>
    <div className="div">
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
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
    <div className="div">
    <DropdownMenu>
<DropdownMenuTrigger asChild>
  <Button variant="outline">Select Project</Button>
</DropdownMenuTrigger>
<DropdownMenuContent className="w-56">
  <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
    <DropdownMenuRadioItem value="top">Nex-ai</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="bottom">Nex-ai</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="right">Nex-ai</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="right">Nex-ai</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="right">Nex-ai</DropdownMenuRadioItem>
  </DropdownMenuRadioGroup>
</DropdownMenuContent>
</DropdownMenu> 
    </div>
    <div className="div">
    <Button className="bg-teal-500 text-black hover:text-white">Search</Button>
    </div>

    
  </div>
  <br />
    <div className="bg-green-400 relative shadow-md sm:rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="w-full md:w-auto flex flex-col md:flex-row md:items-center justify-end flex-shrink-0">
          <button
            onClick={handleCreateEmployeeClick}
            type="button"
            className="flex items-center justify-center text-black bg-white hover:bg-gray-500 font-medium rounded-lg text-sm px-4 py-2  "
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
            Add new timesheet
          </button>
          {showForm && <TimesheetPopupForm onClose={handleCloseForm} onSubmit={handleSubmitForm} />}

        </div>
      </div>
    </div>

    <div className="overflow-x-auto">
        
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-400 uppercase bg-gray-700 ">
          <tr>
            <th scope="col" className="px-4 py-3">
              Task Description
            </th>
            <th scope="col" className="px-4 py-3">
              Duration (in hours)
            </th>
            <th scope="col" className="px-4 py-3">
              Action
            </th>
            <th scope="col" className="px-4 py-3">
              
            </th>
            <th scope="col" className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
        {timesheetdata.map(timesheet => (
            <tr className="border-b border-gray-700" key={timesheet.id}>
              <td scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{timesheet.task_description}</td>
              <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{timesheet.duration}</td>
              
              <td>
              

       
          <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Timesheet</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="project-name" className="text-right">
              Project
            </Label>
            <Input id="name" value="Nex-ai" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Description
            </Label>
            <Input id="category" value="lorem ipsum dolur" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Employee
            </Label>
            <Input id="name" value="Anubhav" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Duration
            </Label>
            <Input id="category" value="4" className="col-span-3" />
          </div>
         </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
          
          

          
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




