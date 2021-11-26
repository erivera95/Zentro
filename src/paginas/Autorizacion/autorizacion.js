import React from 'react';
import './autorizacion.css';
// import Link from 'react-router-dom';

//Importacion de componentes
import { HD } from '../componentesComunes/header/header';
import { FT } from '../componentesComunes/footer/footer';

export default function AUTH() {
    return (
        <div className="body">
            <HD />
            <h1>Autorizacion</h1>
            <FT />

        </div>


    )
}