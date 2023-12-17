import Link from "next/link";
import React, { Component } from "react";
import "./Car.css";
const Car = ({ car, setCar  }: { car: boolean , setCar:React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className={car?"shoppingCar":"shoppingCarNone"}>
      <div className="shoppingCar__container">
        <div className="container__topCar">
          <div className="topCar__contButton">
            <button onClick={()=>setCar(!car)}>{`^`}</button>
          </div>
          <div className="topCar__title">
            <h1>Shopping Car</h1>
          </div>
        </div>
        <div className="container__washCar">
          <Link href={"/shopping-Cart"}>
            <p className="washCar__contButtonOfLink">Wash Car</p>
          </Link>
        </div>
        <div className="container__productsOfCar">{}</div>
        <div className="container__subTotal">
          <i>Sub Total:</i>
          <p>{}</p>
        </div>
        <div className="container__washCar">
          <Link href={"/shopping-Cart"}>
            <p className="washCar__contButtonOfLink">Wash Car</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Car;
