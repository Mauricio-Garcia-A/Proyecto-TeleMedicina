import React from 'react';
import './ModalSelectedShift.scss'

export default function ModalSelectedShift(props) {
    return (
        <>

            <button disabled={props.buttonDisabled} type="button" className="button-standar-04 button-SC" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                {`RESERVAR TURNO PARA VIDEO LLAMADA`}
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="modal-container">
                                <button type="button" className="btn-close button-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
