import React from 'react';
import { Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";



        
const locales = {
    "en-US": require("date-fns/locale/en-US")
  }
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  })
  
  const events = [
    {
      title: "big meeting",
      allday: true,
      start: new Date(2021,8,7),
      end: new Date(2021,8,10),
    },
  
    {
      title: "Vacation",
      start: new Date(2021,8,20),
      end: new Date(2021,8,22),
    },
    {
      title: "Conference",
      start: new Date(2021,8,27),
      end: new Date(2021,8,30),
    },
  ]

const Calender = () => {
    
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

function handleAddEvent() {
  setAllEvents([...allEvents, newEvent])
}

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input type="text" placeholder = "Add Title" style={{width:"20%", marginRight:"10px"}} 
        value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />

        <DatePicker placeholderText="Start date" style={{marginRight:"10px"}}
        selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />

        <DatePicker placeholderText="End date" style={{marginRight:"10px"}}
        selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />

        <button style={{marginTop:"10px"}} onClick={handleAddEvent}>Add Event</button>
        
      </div>
     <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{height:500,margin:"50px"}}/>
    </div>
  ); 
    
    
}

export default Calender