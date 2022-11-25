import React from 'react';
import Img1 from '../../../../../images/img-pt-01.png'


import './IAmPatient.scss'
import IconsPatient from './IconsPatient';

export default function IAmPatient(props) {
    return (
        <div className='container-IAmPatient'>

            <h3> ¿Como uso cital<b>doc</b>?</h3>
            <p>¡Es muy fácil! Te lo explicamos en 3 pasos</p>
            <section>
                <div className="item1-IAmPatient">
                    <img src={Img1} alt='img'/>
                </div>
                <article>
                    <header>
                        <IconsPatient title='seach' />
                        <h5>  1. Buscá el profesional</h5>
                    </header>

                    <p>Primero buscá al profesional según especialidad, ubicación o cobertura médica.</p>
                </article>
                <article>
                    <header>
                        <IconsPatient title='calendar' />
                        <h5> 2. Elegí fecha</h5>
                    </header>
                    <p>Podrás ver la disponibilidad del profesional eligiendo fecha y horario de atención</p>
                </article>
                <article>
                    <header>
                        <IconsPatient title='check' />
                        <h5> 3. Agendá el turno</h5>
                    </header>

                    <p>Confirmas el turno y ¡listo!</p>
                </article>

            </section>

            <button className='button-standar-01 button-IAmPatient'>REGISTRARME</button>
        </div>
    );
}
