import React from "react";
import "./Footer.css";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__email">
          <div className="email__content">
            <div className="content__txt">
              <h2>Boletín informativo</h2>
              <p>
                Suscríbete para recibir noticias sobre novedades y ofertas
                especiales
              </p>
            </div>
            <div className="content__email">
              <div className="email__input">
                <input type="email" name="" id="" />
              </div>
              <button className="email__subscribe">subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer__help">
          <div className="help">
            <div className="help__linkHelp">
              <div className="linkHelp__info">
                <h1>¿Buscas ayuda? Ve a la página de Ayuda</h1>
                <p>
                  Párrafo. Haz clic aquí para agregar tu texto y editar. Permite
                  que tus usuarios te conozcan.
                </p>
                <div>
                  <Link href="/help">Ir al Centro de ayuda</Link>
                </div>
              </div>
            </div>
            <div className="help__contimg">
              <img
                src="./imgPngs\c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer__moreInfo">
          <div className="moreInfo__cont">
            <div className="cont__location">
              <h3>Store Location</h3>
              <p>
                Av. Fray A. Alcalde 10 44100, Guad., Jal., México
                info@misitio.com +52-1-33-12345678
              </p>
              <ul className="location__social">
                <li className="social__red">
                  <a href="/">
                    <img src="./icons\redSocial\icons8-facebook-30.png" alt="" />
                  </a>
                </li>
                <li className="social__red">
                  <a href="/">
                    <img src="./icons\redSocial\icons8-instagram-30.png" alt="" />
                  </a>
                </li>
                <li className="social__red">
                  <a href="/">
                    <img src="./icons\redSocial\icons8-twitter-30.png" alt="" />
                  </a>
                </li>
                <li className="social__red">
                  <a href="/">
                    <img src="icons\redSocial\icons8-youtube-30.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="cont__store">
              <h3>Store</h3>
              <div className="store__products">
                <Link href="/">Comprar todo</Link>
                <Link href="/">Computadoras</Link>
                <Link href="/">Tabletas</Link>
                <Link href="/">Drones y cámaras</Link>
                <Link href="/">Audio</Link>
                <Link href="/">Celulares</Link>
                <Link href="/">T.V. y cine en casa</Link>
                <Link href="/">Tecnología portátil</Link>
                <Link href="/">Oferta</Link>
              </div>
            </div>
            <div className="cont__clientAttention">
              <h3>Client attention</h3>
              <div className="clientAttention__moreInfo">
                <Link href="/about">about</Link>
                <Link href="/contact">contact</Link>
                <Link href="/attendance">attendance </Link>
                <Link href="/call">Asisten</Link>
                <Link href="/call">Employment</Link>
              </div>
            </div>
            <div className="cont__politics">
              <h3>Politics</h3>
              <Link href="/Politics">
                <p>
                  Envío y devoluciones Términos y condiciones Métodos de pago
                  FAQ
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="cont__make">
            <p>© 2023 Creado por Whelken</p>
        </div>
      </div>
    </footer>
  );
};
