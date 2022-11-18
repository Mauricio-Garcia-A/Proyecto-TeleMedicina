import React from 'react';
import SeachFliters from '../../SeachFilter/SeachFliters';

import './HomeHeader.scss'


export default function HomeHeader(props) {
    return (
        <div className='container-HomeHeader'>
            <div>
                <h1>¡Te damos la bienvenida a Citaldoc!</h1>
                <h1>Tu sitio de consultas medicas</h1>
            </div>
            <div className='container-seach-HomeHeader'>
                <h2> ¿Qué estás buscando?</h2>
                < SeachFliters />
            </div>
        </div>
    );
}

