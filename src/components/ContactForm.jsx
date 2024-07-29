// src/App.jsx
import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import '../styles/ContactForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ContactForm() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6w4kguo', 'template_w1pig7h', e.target, 'ClGC97hBt2BtlaVgB')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            title: 'Mensaje enviado',
            text: 'Tu mensaje ha sido enviado exitosamente.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            title: 'Error',
            text: 'Hubo un error al enviar el mensaje.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
      });

    e.target.reset();
  };

  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Mantengámonos en contacto</h3>
          <p className="text">
            Nos gustaría que te pongas en contacto con nosotros!
          </p>
          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
              <p>Manzana XVI Lote 111, Parque Industrial Tepeji CP 42884, Tepeji del Río de Ocampo, Hidalgo, México</p>
            </div>
            
            <div className="information">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
              <p>123-456-789</p>
            </div>
          </div>
          <div className="social-media">
            <p>Nuestras Redes Sociales :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <form onSubmit={sendEmail} autoComplete="off">
            <h3 className="title">Contactanos</h3>
            
            <div className="input-container">
              <input type="text" name="name" className="input" required />
              <label htmlFor="">Nombre</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" required />
              <label htmlFor="">Correo</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" required />
              <label htmlFor="">Teléfono</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" required></textarea>
              <label htmlFor="">Mensaje</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Enviar" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
