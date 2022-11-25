import React, { useState } from 'react';
import CalendarDaysOfTheMonth from './CalendarDaysOfTheMonth/CalendarDaysOfTheMonth';
import CalendarHoursOfTheDay from './CalendarHoursOfTheDay/CalendarHoursOfTheDay';
import {LANGUAGE} from '../../../globalVariable/globalVariable'

import './ShiftsCalendar.scss'
import ConsultationConfirm from '../ConsultationConfirm/ConsultationConfirm';


const SvgIconExclamationMark = (props) => (
  <svg
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M256 0C114.609 0 0 114.609 0 256c0 141.391 114.609 256 256 256 141.391 0 256-114.609 256-256C512 114.609 397.391 0 256 0zm0 472c-119.297 0-216-96.703-216-216S136.703 40 256 40s216 96.703 216 216-96.703 216-216 216z" />
    <path d="M240 234.656 246.234 320h19.547L272 233.875V128h-32zM240 352h32v32h-32z" />
  </svg>
)


export default function ShiftsCalendar({ userProfile }) {


  const [daySelected, setDaySelected] = useState(         // Inicializacion Mes seleccionado
    {
      day: 10,
      year: 2022,
      month: 10,
      hours: [],
    }
  )

  const [monthSelectedCalendar, setMonthSelectedCalendar] = useState(         // Inicializacion Mes seleccionado
  {
    year: 2022,
    month: 10,
  }
  )

  const [shiftSelected, setShiftSelected]=useState([])


  //const [shiftListMonth, setShiftListMonth] = useState([])
  
  return (
    <div className='container-ShiftsCalendar'>
      <h5>Qué día preferís?</h5>
      <p><SvgIconExclamationMark width='18px' fill='grey' /> Los día grisados no tienen horarios disponibles</p>
      
      <CalendarDaysOfTheMonth 
          shifts={userProfile.shifts} 
          setDay={setDaySelected} 
          setMonth={setMonthSelectedCalendar}
          language={LANGUAGE}
      />

      <br /><br /><br />
      <h5>Elegí horarios</h5>
      <CalendarHoursOfTheDay 
          daySelected={daySelected}
          monthSelected={monthSelectedCalendar}
          setDay={setDaySelected} 
          shifts={userProfile.shifts}
          setShiftSelected={setShiftSelected}
          language={LANGUAGE}
      />
      
      <ConsultationConfirm shiftSelected={shiftSelected} imgProfileUser={userProfile.img} amountProfileUser={userProfile.amount}  nameProfileUser={userProfile.name}  specialtyProfileUser={userProfile.specialty} />
    </div>
  );
}







