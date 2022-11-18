import React from 'react';
import { Link } from 'react-router-dom';

import './SeachFliters.scss'


export default function SeachFliters(props) {
    return (
        <div>
            <form >
                <div className='container-elements-SeachFliters'>
                    <div className='container-select-SeachFliters'>
                        <select className="form-select" aria-label="Default select example" >
                            <option selected>Especialidad</option>
                            <option value="1">Pediatría </option>
                            <option value="2">Clínica Médica </option>
                            <option value="3">Traumatología </option>
                            <option value="4">Salud Mental </option>
                            <option value="5">Dermatología  </option>
                            <option value="6">Odontologia </option>
                            <option value="7">Cardiologia </option>
                            <option value="8">Neumonologia </option>
                            <option value="9">Neurologia </option>
                            <option value="10">Gastroenterología </option>
                            <option value="11">Nutricion </option>
                            <option value="12">Salud de la mujer </option>
                        </select>
                        <select className="form-select" aria-label="Default select example" label="Consultas Online">
                            <option selected>Tipo de consulta</option>
                            <optgroup label="Consultas Online">
                                <option value="1">VideoLlamada </option>
                                <option value="2">Chat </option>
                                <option value="3">Disponible Online ahora </option>
                                <option value="4">Orientación Coronavirus (Gratuita) </option>
                            </optgroup>
                            <optgroup label="Visita en Consultorio">
                                <option value="5">Turno en Consultorio </option>
                            </optgroup>
                        </select>
                    </div>
                    <div className='container-input-SeachFliters'>
                            <input type="text" className="form-control" placeholder="Buscá por profesional, zona, especialidad o cobertura médica" aria-label="Buscá por profesional, zona, especialidad o cobertura médica" aria-describedby="button-addon2" />
                    </div>
                    
                </div>
                <div className="container-button-SeachFliters">
                    <Link to={"buscar-profesional"} type="submit" className="button-standar-02 button-seachFilters">BUSCAR</Link>
                </div>
            </form>
        </div>
    );
}

