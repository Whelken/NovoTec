"use client";
import Link from "next/link";
import React from "react";
import "./Nav.css";

const Nav = (): JSX.Element => {
  const [menu, setMenu] = React.useState<boolean>(false);
  return (
    <div>
      <nav className="nav1">
        <div className="content">
          <div className="content__parts">
            <div className="content__part1">
              <div className="part1__cont">
                <img
                  className="cont__img"
                  src="./icons/icons8-caja-64.png"
                  alt=""
                />
              </div>
              <p>Free shipping on purchases over $499</p>
            </div>
            <div className="content__navInfo">
              <ul>
                <li>
                  <Link href="/about">about</Link>
                </li>
                <li>
                  <Link href="/contact">contact</Link>
                </li>
                <li>
                  <Link href="/attendance">attendance </Link>
                </li>
                <li>
                  <Link href="/call">call +52-1-33-12345678</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navBar">
          <div className="navBar__container">
            <div className="container__part1">
              <h1>NovoTec</h1>
              <div className="part1__search">
                <input type="text" />
                <Link href="/search">
                  <div className="search__contIcon">
                    <div className="contIcon__contImg">
                      <img src="./icons\icons8-lupa-50.png" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="container__part2">
              <Link href="/login">
                <div className="part2__navBar">
                  <div className="navBar__contIcon">
                    <img
                      src="./icons\icons8-usuario-masculino-en-círculo-24.png"
                      alt=""
                    />
                  </div>
                  <p>Login</p>
                </div>
              </Link>
              <Link href="/favorite">
                <div className="part2__navBar">
                  <div className="navBar__contIcon">
                    <img src="./icons\icons8-corazón-50.png" alt="" />
                  </div>
                  <p>favorite</p>
                </div>
              </Link>
              <Link href="/shopping-Cart">
                <div className="part2__navBar">
                  <div className="navBar__contIcon">
                    <img
                      src="./icons\icons8-carrito-de-compras-52.png"
                      alt=""
                    />
                  </div>
                  <p>{"0"}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="navProducts">
          <div className="navProducts__cont">
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
      </nav>

      <nav className="nav2">
        <div className="content">
          <div className="content__parts">
            <div className="content__part1">
              <div className="part1__cont">
                <img
                  className="cont__img"
                  src="./icons/icons8-caja-64.png"
                  alt=""
                />
              </div>
              <p>Free shipping on purchases over $499</p>
            </div>
            {/* <div className="content__navInfo">
              <ul>
                <li>
                  <Link href="/about">about</Link>
                </li>
                <li>
                  <Link href="/contact">contact</Link>
                </li>
                <li>
                  <Link href="/attendance">attendance </Link>
                </li>
                <li>
                  <Link href="/call">call +52-1-33-12345678</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="navBar">
          <div className="navBar__container">
            <div className="container__part1">
              <h1>NovoTec</h1>
              {/* <div className="part1__search">
                <input type="text" />
                <Link href="/search">
                  <div className="search__contIcon">
                    <div className="contIcon__contImg">
                      <img src="./icons\icons8-lupa-50.png" alt="" />
                    </div>
                  </div>
                </Link>
              </div> */}
            </div>
            <div className="container__part2">
              {/* <Link href="/login">
                <div className="part2__navBar">
                  <div className="navBar__contIcon">
                    <img
                      src="./icons\icons8-usuario-masculino-en-círculo-24.png"
                      alt=""
                    />
                  </div>
                  <p>Login</p>
                </div>
              </Link>
              <Link href="/favorite">
                <div className="part2__navBar">
                  <div className="navBar__contIcon">
                    <img src="./icons\icons8-corazón-50.png" alt="" />
                  </div>
                  <p>favorite</p>
                </div>
              </Link> */}
              <Link href="/shopping-Cart">
                <div className="part2__navBar">
                  <div className="navBar__contIcon">
                    <img
                      src="./icons\icons8-carrito-de-compras-52.png"
                      alt=""
                    />
                  </div>
                  <p>{"0"}</p>
                </div>
              </Link>
                  <button className="navBar__contIcon" onClick={()=>setMenu(!menu)}>
                    <img src="./icons\icons8-menú-50.png" alt="" />
                  </button>
            </div>
          </div>
        </div>
        <div className="part1__search">
          <input type="text" />
          <Link href="/search">
            <div className="search__contIcon">
              <div className="contIcon__contImg">
                <img src="./icons\icons8-lupa-50.png" alt="" />
              </div>
            </div>
          </Link>
        </div>
        {/* <div className="navProducts">
          <div className="navProducts__cont">
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
        </div> */}

        <div className={menu? "menuResponsive" : "menuResponsive__none"}>
          <div className="menuResponsive__part2">
            <div className="navBar__more">
              <Link href="/login">
                <div className="part2__navBar">
                  <div className="navBar__contIcon">
                    <img
                      src="./icons\icons8-usuario-masculino-en-círculo-24.png"
                      alt=""
                    />
                  </div>
                  <p>Login</p>
                </div>
              </Link>
              <Link href="/favorite">
                <div className="part2__navBar">
                  <div className="navBar__contIcon">
                    <img src="./icons\icons8-corazón-50.png" alt="" />
                  </div>
                  <p>favorite</p>
                </div>
              </Link>
            </div>
            <button className="navBar__contIcon" onClick={()=>setMenu(!menu)}>
              <img src="./icons\icons8-x-24.png" alt="" />
            </button>
          </div>
          <div className="part2__navInfoMenu">
            <ul>
              <li>
                <Link href="/about">about</Link>
              </li>
              <li>
                <Link href="/contact">contact</Link>
              </li>
              <li>
                <Link href="/attendance">attendance </Link>
              </li>
              <li>
                <Link href="/call">call +52-1-33-12345678</Link>
              </li>
            </ul>
          </div>
          <div className="navProducts">
            <div className="navProducts__contMenu">
              <div>
                <Link href="/">Comprar todo</Link>
              </div>
              <div>
                <Link href="/">Computadoras</Link>
              </div>
              <div>
                <Link href="/">Tabletas</Link>
              </div>
              <div>
                <Link href="/">Drones y cámaras</Link>
              </div>
              <div>
                <Link href="/">Audio</Link>
              </div>
              <div>
                <Link href="/">Celulares</Link>
              </div>
              <div>
                <Link href="/">T.V. y cine en casa</Link>
              </div>
              <div>
                <Link href="/">Tecnología portátil</Link>
              </div>
              <div>
                <Link href="/">Oferta</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
