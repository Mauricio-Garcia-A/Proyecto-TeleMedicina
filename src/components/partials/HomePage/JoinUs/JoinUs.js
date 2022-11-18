import React from 'react';
import Img1 from '../../../../images/img-dr-01.png'
import Img2 from '../../../../images/img-dr-02.png'

import './JoinUs.scss'


export default function JoinUs(props) {
    return (
        <div className='container-JoinUs'>
            <img src={Img1} />
            <div>
                <h3>¿Sos médico? ¡Comenzá a trabajar con nosotros!</h3>
                <p>Podés ser parte de nuestra comunidad de médicos online.</p>
                <p>Miles profesionales ya lo hicieron.</p>
                <button className='button-standar-01 button-JoinUs'>Quiero ser parte</button>
            </div>

            <img src={Img2} />

            

        </div>
    );
}

