import React from 'react';
import Topbar from '../../components/commons/Topbar/Topbar';
import ResultElement from '../../components/partials/ResultElement/ResultElement';
import ShiftsCalendar from '../../components/partials/ShiftsCalendar/ShiftsCalendar';
import useSimuladorAPI from '../../hooks/useSimuladorAPI';

import './ProfilePage.scss'


export default function ProfilePage(props) {
    const { perfilesUser } = useSimuladorAPI()

    return (
        <div className='container-ProfilePage'>
            <Topbar styleNav={false} />
            <article>
                <ResultElement nameUser={perfilesUser[0].name} imgProfile={perfilesUser[0].img} medicalSpeciality={perfilesUser[0].specialty} controlsButtons={false} informationUser={true} amount={perfilesUser[0].amount} medicalCoverage={perfilesUser[0].medicalCoverage} />

            </article>
            <div className='calendar-ProfilePage'>
                <ShiftsCalendar userProfile={perfilesUser[0]} />
            </div>
        </div>
    );
}

