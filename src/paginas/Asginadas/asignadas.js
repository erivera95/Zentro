import React from 'react';
import './asignadas.css';
// import Link from 'react-router-dom';

//Importacion de componentes
import { HD } from '../componentesComunes/header/header';
import { FT } from '../componentesComunes/footer/footer';

export default function ASIG() {
    console.log("entre a login");
    return (
        <div className="body">
            <HD />
            <h1>Asignadas</h1>
            <FT />

        </div>


    )
}