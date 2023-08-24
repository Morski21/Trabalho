import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NovaReceita() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaReceita = {
      id: Date.now(),
      titulo,
      ingredientes: ingredientes.split('\n'),
      modoPreparo,
    };

    const receitasExistentes = JSON.parse(localStorage.getItem('receitas')) || [];

    const novasReceitas = [...receitasExistentes, novaReceita];

    localStorage.setItem('receitas', JSON.stringify(novasReceitas));

    navigate('/');
  };

  return (
    <div className='colordiv'>
      <body>
      <h1 className='colorR'>Adicionar Nova Receita</h1>
      <form onSubmit={handleSubmit}>
        <div className='alignform'>
          <label>Título:</label>
          <input 
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div> 
          <label> Ingredientes:</label>
          <textarea className='alignform'
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
          />
        </div>
        <br></br> 
        <div>
          <label>Como Fazer:</label>
          <textarea className='alignform'
            value={modoPreparo}
            onChange={(e) => setModoPreparo(e.target.value)}
            required
          />
        </div> 
        <br></br> 
        <button className='detalhes-button' type="submit">Adicionar Receita</button>
      </form>
      </body>
    </div>
  );
}

export default NovaReceita;
