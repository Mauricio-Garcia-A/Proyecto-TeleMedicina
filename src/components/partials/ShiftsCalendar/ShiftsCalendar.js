import React, { useState } from 'react';


import './ShiftsCalendar.scss'


const SvgIconExclamationMark = (props) => (
    <svg
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M256 0C114.609 0 0 114.609 0 256c0 141.391 114.609 256 256 256 141.391 0 256-114.609 256-256C512 114.609 397.391 0 256 0zm0 472c-119.297 0-216-96.703-216-216S136.703 40 256 40s216 96.703 216 216-96.703 216-216 216z" />
      <path d="M240 234.656 246.234 320h19.547L272 233.875V128h-32zM240 352h32v32h-32z" />
    </svg>
  )

export default function ShiftsCalendar(props) {

    const locale = 'es'                                                               // Se establese el lenguaje ES

    const actualYear = new Date().getFullYear()                                      // Se calcula el Año actual
    const actualMonth = new Date().getMonth()                                        // Se calcula el Mes actual 
    const daysOfMouthActual = new Date(actualYear, actualMonth + 1, 0).getDate()          // Cantidad de dias del mes Actual
    const lastDayPreviousMonth = new Date(actualYear, actualMonth, 0).getDate()         // Utimo dia del mes anterior
    const starDayNextMonth = new Date(actualYear, actualMonth + 1).getDay() + 1          // Dia en el que empieza el mes siguiente (0=dom, 1=lun)


    const intlMonts = new Intl.DateTimeFormat(locale, { month: 'long' })              // Se establece el formatos del Mes

    const weekdays = [...Array(7).keys()]
    const intlWeekDay = new Intl.DateTimeFormat(locale, { weekday: 'short' })          // Se establese el formato de Dia 


    const [monthSelected, setMonthSelected] = useState({                              // Inicializacion Mes seleccionado
        year: actualYear,
        month: actualMonth,
        monthName: intlMonts.format(new Date(actualYear, actualMonth)),
        daysOfMouth: daysOfMouthActual,
        startsOn: new Date(actualYear, actualMonth).getDay() + 1,
        days: [...Array(daysOfMouthActual).keys()],
        endPreviousMonth: lastDayPreviousMonth,
        startNextMonth: starDayNextMonth
    })




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
        <div className='container-ShiftsCalendar'>
            <h5>Qué día preferís?</h5>
            
            <p><SvgIconExclamationMark  width='18px' fill='grey'/> Los día grisados no tienen horarios disponibles</p>
            <div className='container-calendar-days'>
                <div className='container-controls-calendar'>
                    <button onClick={() => selectMonth(monthSelected.year, monthSelected.month - 1)} >{'<'}</button>
                    <h1>{`${monthSelected.monthName} ${monthSelected.year}`}</h1>
                    <button onClick={() => selectMonth(monthSelected.year, monthSelected.month + 1)}>{'>'}</button>

                </div>
                <ol className='list-calendar-days'>
                    {
                        weekDaysNames.map((dayName, i) => {
                            return <li key={`day-name-${i}`} className='days-name'>{dayName}</li>
                        })
                    }
                    {
                        daysPreviousMonth.reverse().map((day, i) => {

                            return <li key={`day-prev-month-number-${i}`} className='days-different-months'>{day}</li>
                        })
                    }
                    {
                        monthSelected.days.map((day, i) => {
                            return <li key={`day-number-${i}`} style={i === 0 ? firstDayStart : {}}>{day + 1}</li>
                        })
                    }
                    {
                        daysNextMonth.map((day, i) => {
                            return <li key={`day-next-month-number-${i}`} className='days-different-months'>{day}</li>
                        })
                    }
                </ol>
            </div>

            <br /><br /><br />
            <h5>Elegí horarios</h5>
            <div className='container-calendar-hours'>
                <b> {'<'} 10 de Septiembre {'>'}</b>
                <ol className='list-calendar-hours'>
                    <li>7:00 AM</li>
                    <li>8:00 AM</li>
                    <li>9:00 AM</li>
                    <li>10:00 AM</li>
                    <li>11:00 AM</li>
                    <li>12:00 AM</li>
                    <li>1:00 PM</li>
                    <li>2:00 PM</li>
                    <li>3:00 PM</li>
                    <li>4:00 PM</li>
                    <li>5:00 PM</li>
                    <li>6:00 PM</li>
                    <li>7:00 PM</li>
                    <li>8:00 PM</li>
                    <li>9:00 PM</li>
                    <li>10:00 PM</li>
                    <li>10:30 PM</li>
                    <li>11:00 PM</li>
                    <li>11:30 PM</li>
                    <li>12:00 PM</li>
                </ol>
            </div>
        </div>
    );
}

