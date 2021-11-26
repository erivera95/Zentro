import React from 'react';
import './home.css';
// import Link from 'react-router-dom';

//Importacion de componentes
import DataTable from 'react-data-table-component';
import { HD } from '../componentesComunes/header/header';
import { FT } from '../componentesComunes/footer/footer';

export default function LG() {
    const columns = [
        {
            name: 'Documento',
            selector: row => row.Documento,
            sortable: true,
        },
        {
            name: 'Cliente',
            selector: row => row.Cliente,
            sortable: true,
        },
        {
            name: 'Cliente',
            selector: row => row.Cliente,
            sortable: true,
        },
        {
            name: 'Cliente',
            selector: row => row.Cliente,
            sortable: true,
        },
    ];

    const data = [
        {
            id: 1,
            Documento: '#1665450',
            Cliente: 'PRASA',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
        {
            id: 2,
            Documento: '#4654880',
            Cliente: 'ZEGNAL',
        },
    ]

    const paginacionOps = {
        rowsPerPageText: 'Filas por Pagina',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos'
    }

    console.log("entre a login");
    return (
        <div className="cuerpoFacturas">
            <HD />
            <div className="facturas">

                <DataTable
                    title="Documentos" //titulo superior de la tabla
                    columns={columns} // columnas de la tabla
                    data={data} //informacion de la tabla
                    // dense //hace menos anchos las columnas
                    // direction="auto"
                    //fixedHeader //manitene centrado el header de las columnas sin importar el scroll
                    //fixedHeaderScrollHeight="600px" // alto de la tabla
                     pagination //genera paginas en la tabla
                     paginationComponentOptions={paginacionOps}
                    // selectableRows //hace posible la seleccion de tabla
                    // selectableRowsHighlight 

                    // responsive
                    // striped


                    dense
                    direction="auto"
                    //fixedHeaderScrollHeight="350px"
                    //highlightOnHover
                    //pagination
                    responsive
                    subHeaderAlign="right"
                    //subHeaderWrap


                />
            </div>

            <FT />

        </div>


    )
}