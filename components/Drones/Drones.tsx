import Link from "next/link";
import React, { Component } from "react";
import "./Drones.css";

export const Drones = () => {
  return (
    <div className="drones">
      <div className="drones__content">
        <div className="content__contDrones">
          <div className="contDrones__contDronesPriceInfo">
            <div className="contDronesPriceInfo__info">
              <div>
                <h2 className="info__p"> Especial del día</h2>
              </div>
              <i>La mejor vista de la ciudad</i>
              <h1>
                30% <span>DTO</span>
              </h1>
              <i>en drones profesionales</i>
              <p>Cantidades limitadas.</p>
              <p>Disponibilidad en la página del producto.</p>
            </div>
            <div className="contDronesPriceInfo__contButton">
              <Link href={"/"}>
                <button>Tienda</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="content__aboutDrones">
          <div className="aboutDrones__contentForm"></div>

          <div className="stakerBestPrice__bestPrice2">
            <h1>Best Price</h1>
          </div>
        </div>
        <div className="content__imgDronePrice">
          <img
            src="./imgPngs/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
