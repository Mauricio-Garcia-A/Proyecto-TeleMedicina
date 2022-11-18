import React from 'react';
import Topbar from '../../components/commons/Topbar/Topbar';
import HomeHeader from '../../components/partials/HomePage/HomeHeader/HomeHeader';
import JoinUs from '../../components/partials/HomePage/JoinUs/JoinUs';

import './Home.scss'

export default function Home(props) {
    return (
        <div className='container-Home'>
            <Topbar />
            <HomeHeader />
            <JoinUs />
        </div>
    );
}