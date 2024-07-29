import React, { useState } from 'react';
import '../styles/Login.css'; // Asegúrate de incluir tus estilos aquí
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SignInSignUp = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  return (
    <div className="outer-container">
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Crear Cuenta</h1>
            <div className="social-container">
              <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>O usa tu correo para registrarte</span>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />
            <button>Registrarse</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Iniciar Sesión</h1>
            <div className="social-container">
              <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>O usa tu cuenta</span>
            <input type="email" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />
            <a href="#">Olvidaste tu contraseña?</a>
            <button>Iniciar Sesión</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bienvenido de Vuelta!</h1>
              <p>Para mantenerse conectado con nosotros, inicie sesión</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>Iniciar Sesión</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hola!</h1>
              <p>Introduce tus datos personales y comienza tu viaje con nosotros</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
