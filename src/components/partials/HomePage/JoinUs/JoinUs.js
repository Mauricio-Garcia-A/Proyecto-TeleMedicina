import React from 'react';
import IAmMedical from './IAmMedical/IAmMedical';
import IAmPatient from './IAmPatient/IAmPatient';




export default function JoinUs(props) {
    return (
        <div>
           <IAmPatient />
           <IAmMedical />
        </div>
    );
}

