import React from 'react';
import { Link } from 'react-router-dom';
import IconCalendarySuccess from '../../../../images/calendary-01.png'


import '../ConsultationConfirm.scss'
export default function ConsultFinish({confirmConsult}) {
    return (
        <div className={confirmConsult?'container-ConsultFinish visibilityOFF':'container-ConsultFinish visibilityON'}>
            <section>
                <img src={IconCalendarySuccess} alt='' />
                <h3>¡Tu turno fue confirmado!</h3>
            </section>
            <footer>
            <Link to={"/"}>
                    <button type="button" className="button-standar-01" data-bs-dismiss="modal">Ir a la Pantalla Principal</button>  
            </Link>
            </footer>
            
        </div>
        
    );
}
