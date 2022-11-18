import React from 'react';
import useSimuladorAPI from '../../../hooks/useSimuladorAPI';
import ResultElement from '../ResultElement/ResultElement';


import './SearchResult.scss'


export default function SearchResult(props) {

    const {perfilesUser}=useSimuladorAPI()

    const amountResults=perfilesUser.length

    return (
        <div className='container-SearchResult'>
           <p className='text-amount-result'>{`Se muestran ${amountResults} profesionales encontrados`}</p>
            {perfilesUser.map((user,i)=>{
                return <div key={`result-user-${i}`} className="container-item-result">
                            <ResultElement nameUser={user.name} imgProfile={user.img} medicalSpeciality={user.specialty} />
                        </div>
            })}
        </div>
    );
}

