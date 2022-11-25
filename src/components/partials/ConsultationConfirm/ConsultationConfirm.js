import React, { useEffect, useState } from 'react';
import ModalSelectedShift from './ModalSelectedShift/ModalSelectedShift';


import './ConsultationConfirm.scss'
import ConsultationDetails from './steps/ConsultationDetails';
import ConsultFinish from './steps/ConsultFinish';

export default function ConsultationConfirm({shiftSelected, imgProfileUser, amountProfileUser,nameProfileUser, specialtyProfileUser}) {
   
    const locale = 'es'

    let dateAndTimeShift = ''
    if (shiftSelected.length!=0){
        let selectedDate = new Date(shiftSelected[0].year, shiftSelected[0].month, shiftSelected[0].day).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric'})
        let selectedTime = new Date(0, 0, 1, shiftSelected[0].hour.split(':')[0], shiftSelected[0].hour.split(':')[1]).toLocaleTimeString("en-AR", { hour12: true, hour: "2-digit", minute: "2-digit" })
        dateAndTimeShift = `${selectedDate}, ${selectedTime}`
    }


    const [buttonDisabled,setButtonDisabled]=useState(true)
    //const [selectedDateTitle,setSelectedDateTitle]=useState(selectedDate)

    useEffect(()=>{
        if (shiftSelected.length===0){
            setButtonDisabled(true)
           // let selectedDate = new Date(shiftSelected[0].year, shiftSelected[0].month, shiftSelected[0].day).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric'})
            //setSelectedDateTitle(selectedDate)
        }else{
            setButtonDisabled(false)
            //let selectedDate= new Date(2022, 7, 20).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric'})
            //setSelectedDateTitle(selectedDate)
        }
    },[shiftSelected])

    
    const [confirmConsult,setConfirmCosult]=useState(true)

    return (
        <div>
            <ModalSelectedShift buttonDisabled={buttonDisabled} >
                <ConsultationDetails  
                    confirmConsult={confirmConsult} 
                    setConfirmCosult={setConfirmCosult} 
                    imgProfileUser={imgProfileUser} 
                    amountProfileUser={amountProfileUser} 
                    nameProfileUser={nameProfileUser} 
                    specialtyProfileUser={specialtyProfileUser}
                    dateAndTimeShift={dateAndTimeShift}
                />
                <ConsultFinish confirmConsult={confirmConsult}/>
            </ModalSelectedShift>
        </div>
    );
}
