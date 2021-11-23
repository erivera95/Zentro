import React from 'react';
import './home.css';
// import Link from 'react-router-dom';

//Importacion de componentes
import { HD } from '../componentesComunes/header/header';
import { FT } from '../componentesComunes/footer/footer';

export default function LG() {
    console.log("entre a login");
    return (
        <div className="body">
            <HD />
            <h1>home</h1>
            <FT />

        </div>


    )
}