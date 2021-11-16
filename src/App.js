
import React from 'react';
// import { Home } from './pages/Home/Home';
import { login } from './paginas/Login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Activas } from './pages/Activas/activas';
import { FT } from './paginas/componentesComunes/footer/footer';
import './App.css';

function App() {
  return (

    <div>
        <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" component={login} />
          </Routes>
        </BrowserRouter>
        </React.Fragment>
<FT/>
    </div>


  );
}

export default App;
