import React from 'react'
import './header.css';

function HD(props) {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="/Facturas">Facturas</a></li>
                    <li><a href="/Asignadas">Asignadas</a></li>
                    <li><a href="/Autorizacion">Autorizacion</a></li>
                    <li><a href="/">Salir</a></li>
                </ul>
            </nav>
        </header>
    )
}


export { HD };
