import { Link } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import blogLogo from '../assets/blogLogo.png';
import "../styles/Navbar.css";

function Navbar() {

  return (
    <header className="header">
      <nav className="nav">
        {/* Lien vers la page d'accueil avec une icône */}
        <Link to="/" className="nav-logo">
            <img src={blogLogo} width={100} alt=""  />
        </Link>

        {/* Liens de navigation */}
        <div className="nav-links">
          <Link to="/" className='link home-link'>Accueil</Link>
          <Link to="/articles" className='link article-link'>Articles</Link>
          <Link to="/projets" className='link article-link'>Projets</Link>
          <Link to="/about" className='link article-link'>A propos</Link>
          <Link to="/cours" className='link article-link'>Cours</Link>
        </div>
        <div className="search">
          <input type="text" placeholder='Recherche' />
          <button>
            <FaSearch size={10} />
          </button>
          
        </div>
        
        <FaBars size={20} className="FaBars"/>
      </nav>
    </header>
  );
}

export default Navbar;