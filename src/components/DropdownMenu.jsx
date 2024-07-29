import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; // Importamos el nuevo ícono
import '../styles/DropdownMenu.css';

const DropdownMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="menu-button" onClick={toggleMenu}>
        ☰
      </div>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
      <nav className={`dropdown-menu-container ${menuOpen ? 'open' : ''}`} ref={menuRef}>
        <div className="dropdown-menu">
          <Link to="/" className="home-link" onClick={closeMenu}>
            <FontAwesomeIcon icon={faHouse} /> Inicio 
          </Link>
          <Link to="/login" onClick={closeMenu}>Iniciar Sesion</Link>
          <Link to="/certifications" onClick={closeMenu}>Certificaciones</Link>
          <Link to="/job" onClick={closeMenu}>Bolsa de Trabajo</Link>
          <Link to="/contact" onClick={closeMenu}>Contacto</Link>
          <Link to="/privacy" onClick={closeMenu}>Aviso de Privacidad</Link>
        </div>
      </nav>
    </>
  );
};

export default DropdownMenu;
