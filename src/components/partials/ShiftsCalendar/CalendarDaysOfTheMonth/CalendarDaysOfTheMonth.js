import React, { useState } from 'react';
import IconCalendar from '../IconsCalendar/IconCalendar';


import './CalendarDaysOfTheMonth.scss'


export default function CalendarDaysOfTheMonth({ shifts, setDay, setMonth, language="es"}) {
    const locale = language                                                              // Se establese el lenguaje ES

    const currentYear = new Date().getFullYear()                                            // Se calcula el Año actual
    const currentMonth = new Date().getMonth()                                              // Se calcula el Mes actual 
    const daysOfMonthCurrent = new Date(currentYear, currentMonth + 1, 0).getDate()         // Cantidad de dias del mes Actual
    const lastDayPreviousMonth = new Date(currentYear, currentMonth, 0).getDate()           // Utimo dia del mes anterior
    const starDayNextMonth = new Date(currentYear, currentMonth + 1).getDay() + 1          // Dia en el que empieza el mes siguiente (0=dom, 1=lun)


    const intlMonts = new Intl.DateTimeFormat(locale, { month: 'long' })              // Se establece el formatos del Mes

    const weekdays = [...Array(7).keys()]
    const intlWeekDay = new Intl.DateTimeFormat(locale, { weekday: 'short' })          // Se establese el formato de Dia 


    const [monthSelected, setMonthSelected] = useState({                              // Inicializacion Mes seleccionado
        year: currentYear,
        month: currentMonth,
        monthName: intlMonts.format(new Date(currentYear, currentMonth)),
        daysOfMouth: daysOfMonthCurrent,
        startsOn: new Date(currentYear, currentMonth).getDay() + 1,
        days: [...Array(daysOfMonthCurrent).keys()],
        endPreviousMonth: lastDayPreviousMonth,
        startNextMonth: starDayNextMonth
    })

    const [disabledPrev, setDisabledPrev] = useState(true)                          //visibilidad boton mes previo



    function selectMonth(year, month) {
        if (month > 11) {
            year = year + 1
            month = 0
        }
        if (month < 0) {
            year = year - 1
            month = 11
        }

        const monthName = intlMonts.format(new Date(year, month))
        const nextMontIndex = month + 1
        const daysOfMouth = new Date(year, nextMontIndex, 0).getDate()   // Calculo cantidad de dias por cada mes
        const startsOn = new Date(year, month).getDay() + 1
        const days = [...Array(daysOfMouth).keys()]
        const endPreviousMonth = new Date(year, month, 0).getDate()
        const startNextMonth = new Date(year, month + 1).getDay() + 1
        setMonthSelected({
            year,
            month,
            monthName,
            days,
            startsOn,
            daysOfMouth,
            endPreviousMonth,
            startNextMonth
        })
        setMonth({
            year,
            month
        })
        if ((currentMonth === month) && (currentYear === year)) {
            setDisabledPrev(true)
        } else {
            setDisabledPrev(false)
        }

    }


    const weekDaysNames = weekdays.map(weekDayIndex => {                         // Creo el array con el nombre de los dias empesando desde el domingo
        const date = intlWeekDay.format(new Date(2022, 7, weekDayIndex))
        return date
    })



    const firstDayStart = {
        gridColumnStart: `${monthSelected.startsOn}`
    }

    let daysPreviousMonth = []
    if ((monthSelected.startsOn > 1) && (monthSelected.startsOn <= 7)) {
        let dayPrevMonth = monthSelected.endPreviousMonth
        for (let i = 0; i < monthSelected.startsOn - 1; i++) {
            daysPreviousMonth.push(dayPrevMonth)
            dayPrevMonth = dayPrevMonth - 1
        }
    }
    let daysNextMonth = []
    if ((monthSelected.startNextMonth > 1) && (monthSelected.startNextMonth <= 7)) {
        let dayNexMonth = 1
        for (let i = monthSelected.startNextMonth; i <= 7; i++) {
            daysNextMonth.push(dayNexMonth)
            dayNexMonth = dayNexMonth + 1
        }
    }

    return (
        <div className='container-calendar-days'>
            <div className='container-controls-calendar'>
                <button disabled={disabledPrev} onClick={() => selectMonth(monthSelected.year, monthSelected.month - 1)} >
                    <IconCalendar title='arrowLeft' width='15px' />
                </button>
                <h1>{`${monthSelected.monthName} ${monthSelected.year}`}</h1>
                <button onClick={() => selectMonth(monthSelected.year, monthSelected.month + 1)}>
                    <IconCalendar title='arrowRight' width='15px' />
                </button>

            </div>
            <ol className='list-calendar-days'>
                {
                    weekDaysNames.map((dayName, i) => {
                        return <li key={`day-name-${i}`} className='days-name'>{dayName}</li>
                    })
                }
                {
                    daysPreviousMonth.reverse().map((day, i) => {

                        return <li key={`day-prev-month-number-${i}`} className='days-different-months'><p>{day}</p></li>
                    })
                }
                {
                    monthSelected.days.map((day, i) => {
                        let numDay = day + 1
                        let shiftSelec = shifts.find(shift => ((shift.day === numDay) && (shift.month === monthSelected.month) && (shift.year === monthSelected.year)))
                        if (shiftSelec === undefined) {
                            return <li key={`day-number-${i}`} style={i === 0 ? firstDayStart : {}}>
                                        <p>{numDay}</p>
                                    </li>
                        } else {
                            return <li key={`day-number-${i}`} style={i === 0 ? firstDayStart : {}} 
                                    className="medical-shift-indicator" 
                                    onClick={() => setDay(
                                        {
                                            day: numDay,
                                            year: monthSelected.year,
                                            month: monthSelected.month,
                                            hours: shiftSelec.hours,
                                    })}>
                                        <b>{numDay}</b>
                                        <p>
                                            {shiftSelec.hours.length} horarios <span>disponibles</span> 
                                        </p>
                                    </li>
                        }
                    })
                }
                {
                    daysNextMonth.map((day, i) => {
                        return <li key={`day-next-month-number-${i}`} className='days-different-months'><p>{day}</p></li>
                    })
                }
            </ol>
        </div>
    );
}

