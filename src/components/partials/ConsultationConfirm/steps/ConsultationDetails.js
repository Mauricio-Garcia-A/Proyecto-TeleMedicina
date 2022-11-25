import React from 'react';

export default function ConsultationDetails({confirmConsult, setConfirmCosult,imgProfileUser, amountProfileUser,nameProfileUser,specialtyProfileUser,dateAndTimeShift}) {

    
    return (
        <div className={confirmConsult?'container-ConsultationDetails visibilityON':'container-ConsultationDetails visibilityOFF'}>
            <header>
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Confirmación de turno</h1>
            </header>
            <section className='container-data-porfile-profe'>
                <img src={imgProfileUser} alt='' />
                <b>{nameProfileUser}</b>
                <p>{specialtyProfileUser}</p>
            </section>
            <section>
                <p><b>Día y Hora: </b> {dateAndTimeShift}</p>
                <p><b>Atencíon:</b> Videollamada</p>
                <p><b>Paciente:</b> Nombre y Apellido </p>
                <p> <b>Importe de la consulta:</b>{amountProfileUser}</p>
            </section>
            <footer>
              <button type="button" className="button-standar-03 " data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="button-standar-04 " onClick={()=>setConfirmCosult(false)}>Confirmar</button>  
            </footer>
            
        </div>
    );
}
