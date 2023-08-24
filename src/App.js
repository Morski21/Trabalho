import React from 'react';
import ListaReceitas from './pages/listReceitas/ListaReceitas';
import DetalhesReceita from './pages/detaReceita/DetalhesReceita';
import NovaReceita from './pages/addReceita/NovaReceita';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./Components/estilo.css";
import logo from './Components/Imagens/lasanha.png'
function App() {
  return (
    <Router>
      <header id="cabecalho">
        <div>
          <h1 className='header'>
            <img src={logo} width='150px' height='150px' />
            <strong className='color'>Delícia</strong> <strong className="corLogo">Receitas</strong>
          </h1>
        </div>

        <Header />
        <Routes>
          <Route path="/adicionar" element={<NovaReceita />} />
        </Routes>
      </header>
      <Routes>
        <Route path="/" element={<ListaReceitas />} />
      </Routes>
      <Routes>
        <Route path="/detalhes/:id" element={<DetalhesReceita />} />
      </Routes>
    </Router>
  );

}


export default App;
