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
                    <Link to={"profesional-seleccionado/01"} type="submit" className="button-standar-04">TOMAR TURNO ONLINE</Link>
                    <button className="button-standar-05">CONSULTA POR CHAT</button>
                </div>
                : <></>
            }


            {informationUser
                ? <div className='buttons-information-user-RE'>
                    <p><b>Importe de la consulta:</b>{` $ ${amount}`}</p>
                    <div>
                        <p><b>Cobertura médica:</b></p>
                        <ul>
                            {medicalCoverage.map((MC, i) => {
                                return <li>{MC}</li>
                            })}
                        </ul>
                    </div>
                </div>
                : <></>
            }


        </div>
    );
}

