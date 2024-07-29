import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import "../styles/Certifications.css";

CustomEase.create("cubic", "0.83, 0, 0.17, 1");

const Certifications = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [modalData, setModalData] = useState(null);
  const sliderRef = useRef(null);

  const cardsData = [
    {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "ISO 9001:2015",
      info: "Determina los requisitos para un Sistema de Gestión de la Calidad, que pueden utilizarse para su aplicación interna por las organizaciones, sin importar si el producto y/o servicio lo brinda una organización pública o empresa privada, cualquiera que sea su rama, para su certificación o con fines contractuales"
    },
    {
      src: "https://images.unsplash.com/photo-1560618259-dff83f6cacbd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "ISO 14001:2015",
      info: "Especifica los requisitos para un sistema de gestión ambiental que una organización puede usar para mejorar su desempeño ambiental. Está prevista para uso por una organización que busque gestionar sus responsabilidades ambientales de una forma sistemática que contribuya al pilar ambiental de la sostenibilidad."
    },
    {
      src: "https://images.unsplash.com/photo-1611647832580-377268dba7cb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "ISO 27001:2022",
      info: "Especifica los requisitos necesarios para establecer, implantar, mantener y mejorar un sistema de gestión de seguridad de la información, ciberseguridad y protección de la privacidad. Es consistente con las mejores prácticas descritas en ISO/IEC 27002, anteriormente conocidas como ISO/IEC 17799, cuyo origen es la norma BS 7799-2:2002; desarrollada por la British Standards Institution (BSI), entidad de normalización británica."
    },
    {
      src: "https://images.unsplash.com/photo-1565562141896-9e2423ad19b5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "ISO 14298:2021",
      info: "Especifica un conjunto mínimo de requisitos del sistema de gestión de impresión de seguridad. Las organizaciones garantizan que los requisitos de seguridad del cliente se cumplan según corresponda, siempre que no entren en conflicto con los requisitos de este documento."
    }
  ];

  const splitTextIntoSpans = (selector) => {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      let text = element.innerText;
      let splitText = text
        .split("")
        .map((char) => `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`)
        .join("");
      element.innerHTML = splitText;
    });
  };

  const initializeCards = () => {
    let cards = Array.from(sliderRef.current.querySelectorAll(".card"));
    gsap.to(cards, {
      y: (i) => -15 + 15 * i + "%",
      z: (i) => 15 * i,
      duration: 1,
      ease: "cubic",
      stagger: -0.1
    });
  };

  useEffect(() => {
    splitTextIntoSpans(".copy h1");
    initializeCards();

    gsap.set("h1 span", { y: -200 });
    gsap.set(".slider .card:last-child h1 span", { y: 0 });

    const handleClick = (e) => {
      if (isAnimating || e.target.closest(".info-button")) return;

      setIsAnimating(true);
      let slider = sliderRef.current;
      let cards = Array.from(slider.querySelectorAll(".card"));
      let lastCard = cards.pop();
      let nextCard = cards[cards.length - 1];

      gsap.to(lastCard.querySelectorAll("h1 span"), {
        y: 200,
        duration: 0.75,
        ease: "cubic"
      });

      gsap.to(lastCard, {
        y: "+=150%",
        duration: 0.75,
        ease: "cubic",
        onComplete: () => {
          slider.prepend(lastCard);
          initializeCards();
          gsap.set(lastCard.querySelectorAll("h1 span"), { y: -200 });
          setTimeout(() => {
            setIsAnimating(false);
          }, 1000);
        }
      });

      gsap.to(nextCard.querySelectorAll("h1 span"), {
        y: 0,
        duration: 1,
        ease: "cubic",
        stagger: 0.05
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleButtonClick = (card) => {
    setModalData(card);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="container">
      <div className="slider" ref={sliderRef}>
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.src} alt="" />
            <div className="copy">
              <h1>{card.text}</h1>
            </div>
            <button
              className="info-button-bottom"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick(card);
              }}
            >
              Más Información
            </button>
          </div>
        ))}
      </div>
      {modalData && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              x
            </button>
            <h2>{modalData.text}</h2>
            <p>{modalData.info}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
