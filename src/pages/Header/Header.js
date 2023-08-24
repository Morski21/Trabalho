import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul className='espacamento'>
          <li>
            <Link to="/">| Página Inicial | </Link>
          </li>
          <li>
            <Link to="/adicionar">| Nova Receita |</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
