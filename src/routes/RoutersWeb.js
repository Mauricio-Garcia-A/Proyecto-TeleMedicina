import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ResultPage from '../pages/ResultPage/ResultPage';

export default function RoutersWeb(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Proyecto-TeleMedicina" element={<Home />} />
            <Route path={"/buscar-profesional"} element={ <ResultPage/> } />
            <Route path={"/Proyecto-TeleMedicina/buscar-profesional"} element={ <ResultPage/> } />
            <Route path="/buscar-profesional/profesional-seleccionado/:id" element={ <ProfilePage /> } />
            <Route path="/Proyecto-TeleMedicina/buscar-profesional/profesional-seleccionado/:id" element={ <ProfilePage /> } />
            <Route path="*" element={ <div>error</div> } />
        </Routes>
    );
}