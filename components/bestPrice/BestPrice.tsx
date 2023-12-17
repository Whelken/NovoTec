import Link from "next/link";
import React, { Component } from "react";
import "./BestPrice.css";

export const BestPrice = () => {
  return (
    <div className="bestPrice">
      <div className="bestPrice__content">
        <div className="content__imgBestPrice">
          <img
            src="./imgPngs/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.webp"
            alt=""
          />
        </div>
        <div className="cont">
          <div className="content__contentForm"></div>
          <div className="content__contentForm2"></div>
          <div className="stakerBestPrice__bestPrice">
            <h1>Best Price</h1>
          </div>
        </div>
        <div className="content__contBestPrice">
          <div className="contBestPrice__contBestPriceInfo">
            <div className="contBestPriceInfo__info">
              <i>Ahorra Hasta</i>
              <b>$150</b>
              <i>en laptops y tabletas seleccionadas</i>
              <p>Aplican los términos y condiciones </p>
            </div>
            <div className="contBestPriceInfo__contButton">
              <Link href={"/"}>
                <button>Tienda</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
