import React from 'react';
import Img1 from '../../../../../images/img-dr-01.png'
import Img2 from '../../../../../images/img-dr-02.png'


import './IAmMedical.scss'


export default function IAmMedical(props) {
    return (
        <div className='container-IAmMedical'>
            <div className="item1-IAmMedical">
                <img src={Img1} />
            </div>
            <div className="item2-IAmMedical">
                <h3>¿Sos médico? ¡Comenzá a trabajar con nosotros!</h3>
                <p>Podés ser parte de nuestra comunidad de médicos online.</p>
                <p>Miles profesionales ya lo hicieron.</p>
                <button className='button-standar-01 button-IAmMedical'>Quiero ser parte</button>
            </div>
            <div className="item3-IAmMedical">
                <img src={Img2} />
            </div>

        </div>
    );
}
