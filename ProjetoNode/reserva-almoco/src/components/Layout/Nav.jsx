import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>Cardápio</NavLink>
        </li>
        <li>
          <NavLink to="/pratos">Pratos</NavLink>
        </li>
        <li>
          <NavLink to="/novo-prato">Novo Prato</NavLink>
        </li>
        <li>
          <NavLink to="/novo-item">Novo Item Cardápio</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;