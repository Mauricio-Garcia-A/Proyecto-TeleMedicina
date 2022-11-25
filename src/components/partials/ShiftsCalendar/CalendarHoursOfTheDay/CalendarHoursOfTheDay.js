import React, { useEffect, useState } from 'react';
import IconCalendar from '../IconsCalendar/IconCalendar';

import './CalendarHoursOfTheDay.scss'


export default function CalendarHoursOfTheDay({ daySelected, setDay, shifts, monthSelected, setShiftSelected, language="es"}) {
    const locale = language
    // const actualYear = new Date().getFullYear()                                      // Se calcula el Año actual
    // const actualMonth = new Date().getMonth()                                        // Se calcula el Mes actual 
    // const actualDay = new Date().getDate()                                           // Se calcula el Mes actual 


    const PRESET_DAY_HOURS = ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', ' 00:00', ' 00:30']

    let shiftList = shifts.filter((shift => ((shift.month === monthSelected.month) && (shift.year === monthSelected.year)))).sort((a, b) => {
        if (a.day === b.day) {
            return 0
        }
        if (a.day < b.day) {
            return -1
        }
        return 1

    })

    const [disabledNext, setDisabledNext] = useState(false)
    const [disabledPrev, setDisabledPrev] = useState(true)

    useEffect(() => {
        if (shiftList.length === 0) {
            setDay(
                {
                    day: 1,
                    year: monthSelected.year,
                    month: monthSelected.month,
                    hours: [],
                }
            )
            setDisabledPrev(true)
            setDisabledNext(true)
        } else {
            setDay(
                {
                    day: shiftList[0].day,
                    year: shiftList[0].year,
                    month: shiftList[0].month,
                    hours: shiftList[0].hours,
                })
            setDisabledPrev(true)
            if (shiftList.length > 1) {
                setDisabledNext(false)
            } else {
                setDisabledNext(true)
            }
        }

    }, [monthSelected])



    function selectDay(year, month, day, next) {
        let index = shiftList.findIndex(shift => ((shift.year === year) && (shift.month === month) && (shift.day === day)))          //Devuelve el indice donde se encuentra la fecha actual

        if (next === true) {
            index = index + 1                   //indice de la siguiente fecha disppnible 

        } else {
            index = index - 1                   //indice de la anterior fecha disppnible 
        }

        if (index === 0) {
            setDisabledPrev(true)

        } else {
            setDisabledPrev(false)
        }
        if (index === (shiftList.length - 1)) {
            setDisabledNext(true)
        } else {
            setDisabledNext(false)
        }

        setDay(
            {
                day: shiftList[index].day,
                year: shiftList[index].year,
                month: shiftList[index].month,
                hours: shiftList[index].hours,
            })
    }

    let selectedDateTitle = new Date(daySelected.year, daySelected.month, daySelected.day).toLocaleDateString(locale, { month: 'long', day: 'numeric' })



    function listHours(hoursDay, listHoursSelected) {
        let listHours = []

        hoursDay.map((hour, i) => {
            let titleHour = new Date(0, 0, 1, hour.split(':')[0], hour.split(':')[1]).toLocaleTimeString("en-AR", { hour12: true, hour: "2-digit", minute: "2-digit" });
            let disabledHour = true
            
            let element = listHoursSelected.find(e => (((hour.split(':')[0]) === (e.split(':')[0])) && ((hour.split(':')[1]) === (e.split(':')[1]))));
            if (element === undefined) {

            } else {
                disabledHour = false
            }

            listHours.push({
                title: titleHour,
                hour,
                disabled: disabledHour,
                active: false,
                
            })
        })
        return listHours
    }


    const [listHoursShift, setListHoursShift]=useState([])

    useEffect(()=>{
        const listHoursShift = listHours(PRESET_DAY_HOURS, daySelected.hours)
        setListHoursShift(listHoursShift)
    },[daySelected])
    //const listHoursShiftInit = listHours(PRESET_DAY_HOURS, daySelected.hours)
    

    useEffect(() => {

        let index = shiftList.findIndex(shift => ((shift.year === daySelected.year) && (shift.month === daySelected.month) && (shift.day === daySelected.day)))          //Devuelve el indice donde se encuentra la fecha actual
        if (index === 0) {
            setDisabledPrev(true)
        } else {
            setDisabledPrev(false)
        }
        if (index === (shiftList.length - 1)) {
            setDisabledNext(true)
        } else {
            setDisabledNext(false)
        }

    }, [daySelected])

    

    const handleChange=(i,status)=>{
        
        const listHoursShift = listHours(PRESET_DAY_HOURS, daySelected.hours)
        setListHoursShift(listHoursShift)
        listHoursShift[i].active=(status)
        if (status) {
            setShiftSelected (
                [{   year:daySelected.year, 
                    month:daySelected.month, 
                    day:daySelected.day,
                    hour:listHoursShift[i].hour,
                }])
        }else{
            setShiftSelected ([])
        }

    }
   

    return (
        <div className='container-calendar-hours'>
            <div className='container-controls-days'>
                <button disabled={disabledPrev} onClick={() => selectDay(daySelected.year, daySelected.month, daySelected.day, false)}>
                    <IconCalendar title='arrowLeft' width='15px' />
                </button>
                <b>  {`${selectedDateTitle}`} </b>
                <button disabled={disabledNext} onClick={() => selectDay(daySelected.year, daySelected.month, daySelected.day, true)} >
                    <IconCalendar title='arrowRight' width='15px' />
                </button>
            </div>

            <ol className='list-calendar-hours'>
                {listHoursShift.map((hour, i) => {
                    if (hour.disabled){
                        return (<li className={"disableOFF"} key={`hours-day-${i}`} >
                                    {hour.title}
                                </li>)
                    } else {
                      return (<li className={hour.active ? "disableON active" : "disableON"} key={`hours-day-${i}`}  onClick={()=>handleChange(i,!(hour.active))} >
                                    {hour.title}
                                </li>)  
                    } 
                })}
            </ol>
        </div>
    );
}

