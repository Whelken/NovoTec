"use client";
import React, { useEffect, useRef } from "react";
import "./Inicio.css";
import Link from "next/link";

const Inicio =  () => {
  
  const nameElement: [string, string, string] = [
    "superPrice1",
    "superPrice2",
    "superPrice3",
  ];
  const [number, setNumber] = React.useState<number>(0);
  const [name, setName] = React.useState<string>(nameElement[0])

  useEffect(() => {    
    const interval = setInterval(() => {
      setNumber((prevNumber) => (prevNumber + 1) % nameElement.length);
      setName(nameElement[number]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
    
  }, [number]);

  return (
    <>
      <div className="inicio">
        <div className={name}>
          <div className="inicio__cont">
            <div className="cont__txt">
              <p>Mejores precios</p>
              <h1>Súper precios en tus artículos favoritos</h1>
              <i>Gana más por tu dinero</i>
              <Link href="/">
                <button>Comprar ahora</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="inicio__descuente">
          <div className="descuente__content">
            <div className="content__oferte1">
              <div className="oferte__cont">
                <p>Mejores precios</p>
                <h1>Súper precios en tus artículos favoritos</h1>
                <i>Gana más por tu dinero</i>
                <Link href="/">
                  <button>Comprar ahora</button>
                </Link>
              </div>
            </div>
            <div className="content__oferte2">
              <div className="oferte__cont">
                <p>Mejores precios</p>
                <h1>Súper precios en tus artículos favoritos</h1>
                <i>Gana más por tu dinero</i>
                <Link href="/">
                  <button>Comprar ahora</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="inicio__panel">
          <div className="panel__container">
            <div className="container__info">
              <div className="info__img">
                <img
                  src="./icons\iconsInicial\icons8-entrega-moto-caja-sola-64.png"
                  alt=""
                />
              </div>
              <p>Recogida en la acera</p>
            </div>
            <div className="container__info">
              <div className="info__img">
                <img src="./icons\iconsInicial\icons8-caja-64 (1).png" alt="" />
              </div>
              <p>Envío gratis en compras de más de $[499]</p>
            </div>
            <div className="container__info">
              <div className="info__img">
                <img
                  src="./icons\iconsInicial\icons8-por-ciento-48.png"
                  alt=""
                />
              </div>
              <p>Precios bajos garantizados</p>
            </div>
            <div className="container__info">
              <div className="info__img">
                <img src="./icons\iconsInicial\icons8-reloj-48.png" alt="" />
              </div>
              <p>Disponible para ti 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
