import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Major.css';
import '../styles/Scrollbar.css';
import '../styles/PrivacyNotice.css'
import PrivacyNotice from './PrivacyNotice';
import LogoIC2 from '../images/LogoIC2.jpg';

gsap.registerPlugin(ScrollTrigger);

const Major = () => {
  useEffect(() => {
    if (!CSS.supports("animation-timeline: view()")) {
      // Blanket styles
      gsap.set(".fixed", { position: "fixed", inset: 0 });
      gsap.set(".static", { position: "absolute", inset: 0, zIndex: 6 });

      // First section
      gsap.set("section:first-of-type .fixed", { transformOrigin: "50% 0%" });
      gsap.to("section:first-of-type .fixed", {
        scale: "0.35 0.5",
        yPercent: -10,
        scrollTrigger: {
          scrub: 0.5,
          trigger: "section:first-of-type",
          start: "top top",
          end: "bottom 50%"
        }
      });
      gsap.to("section:first-of-type .fixed", {
        opacity: 0,
        scrollTrigger: {
          scrub: 0.5,
          trigger: "section:first-of-type",
          start: "top top",
          end: "bottom 75%"
        }
      });

      // Second section with image scaling down, etc.
      gsap.set("section:nth-of-type(2) article:first-of-type .fixed", {
        clipPath: "ellipse(220% 200% at 50% 300%)", 
        zIndex: 3
      });
      gsap.to("section:nth-of-type(2) article:first-of-type .fixed", {
        clipPath: "ellipse(220% 200% at 50% 175%)", 
        scrollTrigger: {
          scrub: 0.5,
          trigger: "section:nth-of-type(2) article:first-of-type",
          start: "top bottom",
          end: "top top"
        }
      });
      gsap.from("section:nth-of-type(2) article:first-of-type img", {
        scale: 5,
        scrollTrigger: {
          scrub: 0.5,
          trigger: "section:nth-of-type(2) article:first-of-type",
          start: "top bottom",
          end: "top top"
        }
      });

      gsap.set(".loud-wrap", {
        clipPath: "inset(0 0 0 0)",
        mask: "linear-gradient(white 50%, transparent) 0 100% / 100% 200% no-repeat"
      });
      gsap.set(".text-wrap", {
        position: "sticky",
        bottom: "4rem",
        transformOrigin: "50% 0"
      });
      gsap.from("section:nth-of-type(2) article:first-of-type h2", {
        yPercent: 100,
        scrollTrigger: {
          scrub: 0.5,
          trigger: "section:nth-of-type(2) article:first-of-type",
          start: "top 50%",
          end: "top 0%"
        }
      });
      gsap.to("section:nth-of-type(2) article:first-of-type .loud-wrap", {
        maskPosition: "0 0",
        scrollTrigger: {
          scrub: 0.5,
          trigger: "section:nth-of-type(2) article:first-of-type",
          start: "top 50%",
          end: "top 0%"
        } 
      });
      gsap.to("section:nth-of-type(2) article:first-of-type .text-wrap", {
        filter: "blur(4rem)",
        opacity: 0,
        scrollTrigger: {
          scrub: 0.5,
          trigger: "section:nth-of-type(2) article:first-of-type",
          start: "bottom 60%",
          end: "bottom 25%"
        }
      });

      // Third section
      gsap.set("section:nth-of-type(2) article:nth-of-type(2) .fixed", { zIndex: 3 });
      gsap.from("section:nth-of-type(2) article:nth-of-type(2) .fixed", {
        opacity: 0,
        scrollTrigger: {
          scrub: 0.5,
          trigger: "section:nth-of-type(2) article:nth-of-type(2)",
          start: "top 50%",
          end: "top -30%"
        }
      });
      gsap.from("section:nth-of-type(2) article:nth-of-type(2) h2", {
        yPercent: 100,
        opacity: 0,
        scrollTrigger: {
          scrub: 0.5,
          trigger: "section:nth-of-type(2) article:nth-of-type(2)",
          start: "top 50%",
          end: "top 25%"
        }
      });
      gsap.to("section:nth-of-type(2) article:nth-of-type(2) h2", {
        filter: "blur(4rem)",
        color: "transparent",
        scrollTrigger: {
          scrub: 0.5,
          trigger: "section:nth-of-type(2) article:nth-of-type(2)",
          start: "bottom bottom",
          end: "bottom 50%"
        }
      });

      // Fourth section
      gsap.set(".filler", {
        display: "block",
        position: "absolute",
        bottom: "30vh",
        padding: "1rem"
      });
      gsap.set("section:nth-of-type(2) article:nth-of-type(3)", { height: "400vh" });
      gsap.set("section:nth-of-type(2) article:nth-of-type(3) .fixed", { zIndex: 3 });
      gsap.set("section:nth-of-type(2) article:nth-of-type(3) h2", { marginTop: "80vh" });
      gsap.from("section:nth-of-type(2) article:nth-of-type(3) .fixed", {
        opacity: 0,
        scrollTrigger: {
          trigger: "section:nth-of-type(2) article:nth-of-type(3)",
          scrub: 0.5,
          start: "top 80%",
          end: "top top"
        }
      });
      gsap.to("section:nth-of-type(2) article:nth-of-type(3) img", {
        opacity: 0,
        scrollTrigger: {
          trigger: "section:nth-of-type(2) article:nth-of-type(3)",
          scrub: 0.5,
          start: "bottom bottom",
          end: "bottom 85%"
        }
      });
      
      // Animate the text blocks
      const LINES = document.querySelectorAll(".text-blocks p");
      LINES.forEach((LINE, index) => {
        gsap.from(LINE, {
          yPercent: 100,
          opacity: 0,
          scrollTrigger: {
            trigger: "section:nth-of-type(2) article:nth-of-type(3)",
            scrub: 0.5,
            start: `top -=${90 + index * 10}%`,
            end: `top -=${100 + index * 10}%`
          }
        });
      });
      gsap.to(".text-blocks", {
        opacity: 0,
        scrollTrigger: {
          trigger: "section:nth-of-type(2) article:nth-of-type(3)",
          scrub: 0.5,
          start: "bottom 130%",
          end: "bottom 110%"
        }
      });
      gsap.to(".filler h2", {
        opacity: 0,
        filter: "blur(4rem)",
        scrollTrigger: {
          trigger: "section:nth-of-type(2) article:nth-of-type(3)",
          scrub: 0.5,
          start: "bottom 55%",
          end: "bottom 30%"
        }
      });

      // The last piece is unclipping the end piece
      gsap.set("section:nth-of-type(2) article:last-of-type .fixed", {
        clipPath: "ellipse(220% 200% at 50% 300%)",
        zIndex: 5
      });
      gsap.to("section:nth-of-type(2) article:last-of-type .fixed", {
        clipPath: "ellipse(220% 200% at 50% 175%)",
        scrollTrigger: {
          trigger: "section:nth-of-type(2) article:last-of-type",
          scrub: 0.5,
          start: "top 80%",
          end: "top 20%"
        }
      });

      // Scroll indicator trickery
      const INDICATORS = document.querySelectorAll(".indicator");
      const ARTICLES = document.querySelectorAll("article");
      INDICATORS.forEach((indicator, index) => {
        gsap.to(indicator, {
          flex: 3,
          repeat: 1,
          yoyo: true,
          scrollTrigger: {
            scrub: true,
            trigger: ARTICLES[index],
            scroller: "body",
            start: "top bottom",
            end: "bottom top"
          }
        });
      });
    }
  }, []);

  return (
    <div className="scrollbar">
      <div className="indicators">
        <a href="#item-1" className="indicator"></a>
        <a href="#item-2" className="indicator"></a>
        <a href="#item-3" className="indicator"></a>
        <a href="#item-4" className="indicator"></a>
        <a href="#item-5" className="indicator"></a>
      </div>
      <main>
        <section>
          <article id="item-1">
            <div className="fixed">
              <img src="https://img.freepik.com/vector-premium/gradiente-azul-marino-borroso-gris-azul-caqui-fondo-papel-tapiz-degradado-naranja_172010-1362.jpg" alt="" />
              <div className="content">
              <h1>ICards Solutions</h1>
              <p>-ICards</p>
              </div>
            </div>
          </article>
        </section>
        <section>
          <article id="item-2">
            <div className="fixed">
              <img src="https://images.unsplash.com/photo-1518420325670-6312b7510dfb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="static">
              <div className="content">
                <div className="text-wrap">
                  <div className="loud-wrap">
                    <h2>¿Quienes somos?</h2>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article id="item-3">
            <div className="fixed"></div>
            <div className="static">
              <div className="content">
                <p>Somos ICARDS SOLUTIONS, una empresa fundada en 2007 y productora en el sector de tarjetas inteligentes. <br/>
                <br/>Nos especializamos en ofrecer tecnología y soluciones integrales, estableciendo alianzas estratégicas con empresas reconocidas. <br/>
                <br/> Nuestros productos y servicios están diseñados para satisfacer las necesidades de emisores financieros tanto públicos como privados en sectores como Gobierno, Banca y Transporte.</p>
              </div>
            </div>
          </article>

          <article id="item-4">
            <div className="fixed">
              <img src="https://images.unsplash.com/photo-1483959651481-dc75b89291f1?q=80&w=2470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="static">
              <div className="content">
                <h2>Cultura</h2>
                <div className="chat-container">
                  <div className="text-blocks">
                    <p>Salud y bienestar laboral</p>
                    <p>Compromiso con el medio ambiente</p>
                    <p>Calidad</p>
                    <p>Uso de energías renovables</p>
                    <p>Honestidad y Transparencia</p>

                  </div>
                </div>
              </div>
            </div>
          </article>
          
          <article id="item-5">
            <div className="fixed">
              <img src="https://img.freepik.com/vector-premium/gradiente-azul-marino-borroso-gris-azul-caqui-fondo-papel-tapiz-degradado-naranja_172010-1362.jpg" alt="" />
              <div className="content">
                <h2>ICards Solutions<br /></h2>
              </div>  
            </div>
            
          </article>
          
        </section>

        <footer>
          <PrivacyNotice /> 
        </footer>

      </main>
    </div>
  );
}

export default Major;
