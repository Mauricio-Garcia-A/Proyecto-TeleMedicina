import React from 'react';
import LogoImage from '../../../images/logo.png'

import './Logo.scss'

export default function Logo(props) {
    return (
        <div className="logo">
            <img src={LogoImage} className='logo-img' />
            <p className="cital">
                <span className="doc" />
            </p>
        </div>
    );
}

