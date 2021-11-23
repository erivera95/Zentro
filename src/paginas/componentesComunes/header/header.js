import React from 'react'
import './header.css';

function HD(props) {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="/home">Facturas</a></li>
                    <li><a href="/">Asignadas</a></li>
                    <li><a href="/">Autorizacion</a></li>
                    <li><a href="/">Salir</a></li>
                </ul>
            </nav>
        </header>
    )
}


export { HD };
