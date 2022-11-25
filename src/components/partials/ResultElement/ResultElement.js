import React from 'react';
import { Link } from 'react-router-dom';

import './ResultElement.scss'


export default function ResultElement({ nameUser, imgProfile, medicalSpeciality, controlsButtons = true, informationUser = false, amount = '0', medicalCoverage = [] }) {
    return (
        <div className='container-ResultElement'>
            <div className='data-user-RE'>
                <div className='img-porfile-RE'>
                    <img src={imgProfile} />
                </div>
                <div>
                    <h5>{nameUser}</h5>
                    <p> {medicalSpeciality}</p>
                    <button className='button-standar-03'>VER PERFIL DEL PROFESIONAL</button>
                </div>

            </div>
            {controlsButtons
                ? <div className='buttons-controls-RE'>
                    <Link to={"profesional-seleccionado/01"} type="submit" className="button-standar-04 button-RE">TOMAR TURNO ONLINE</Link>
                    <button className="button-standar-05 button-RE">CONSULTA POR CHAT</button>
                </div>
                : <></>
            }


            {informationUser
                ? <div className='information-user-RE'>
                    <p><b>Importe de la consulta:</b>{` $ ${amount}`}</p>
                    <div>
                        <p><b>Cobertura médica:</b></p>
                        <ul>
                            {medicalCoverage.map((MC, i) => {
                                return <li key={`medical-coverage-${i}`} >{MC}</li>
                            })}
                        </ul>
                    </div>
                </div>
                : <></>
            }


        </div>
    );
}

