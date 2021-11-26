import React from 'react';
import './login.css';
// import Link from 'react-router-dom';

//Importacion de componentes
import { FT } from '../componentesComunes/footer/footer';

export default function LG() {
    console.log("entre a login");
    return (
        <div className="body">
            <div className="SeccionCentral">
                <form /*onSubmit={handleSubmit}*/ className="entradas">
                    <h2>Iniciar sesión</h2>

                    {/* <label>Usuario</label> */}

                    <input
                        className="usuario"
                        placeholder="Usuario"
                        type="text"
                        name="usuario"
                    />

                    <input
                        placeholder="Contraseña"
                        className="pass"
                        type="password"
                        name="Pass"
                    />

                    <a href="/Facturas">
                        <button type="button" className="boton">Entrar</button>
                    </a>
                    



                </form>
                <FT />
            </div>


        </div >
    );
}