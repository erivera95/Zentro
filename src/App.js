
import React from 'react';
import LG from './paginas/Login/login';
import HM from './paginas/home/home';
import ASIG from './paginas/Asginadas/asignadas';
import AUTH from './paginas/Autorizacion/autorizacion';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {/* Ruta de Home que entra al login */}
          <Route path="/" element={<LG />} />
          <Route path="/Facturas" element={<HM />} />
          <Route path="/Asignadas" element={<ASIG />} />
          <Route path="/Autorizacion" element={<AUTH />} />



{/* Ruta que si se busca no se encuentra */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <h1>:c</h1>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
