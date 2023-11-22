import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Meu Hotel</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          {/* Adicione mais links conforme necessário */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
