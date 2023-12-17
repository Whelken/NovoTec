import Link from "next/link";
import React from "react";
import "./products.css";

export const Products = (props: TProduct): JSX.Element => {
  return (
    <Link href="/">
      <div className="products__content">
        <div className="content__date">
          <div className="date__contImg">
            <img src={props.img} alt="" />
            <p>{props.offer ? "OFERTE" : "none"}</p>
          </div>
          <div className="date__info">
            <div className="date__contName">
              <h2>{props.name}</h2>
            </div>
            <div className="cont__contPrice">
              {props.priceOffer ? (
                <div className="contPrice__priceOferte">
                  <p className="priceOferte__p1">{props.price}.00</p>
                  <p className="priceOferte__p2">{props.priceOffer}.00</p> 
                </div>
              ) : (
                <p>{props.price}.00</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
