import Link from "next/link";
import React, { Component } from "react";
import "./Offer.css";
import { Products } from "../products/Products";

const api = async (): Promise<TProduct[]> => {
  const data: Response = await fetch("http://localhost:3000/api/ofertes", {
    cache: "no-store",
  });
  const allData: TProduct[] = await data.json();
  return allData;
};

export const Offer = async () => {
  const data: TProduct[] = await api();
  return (
    <>
      <div className="moreSold">
        <div className="moreSold__content">
          <h1>Offer</h1>
          <div className="content__products">
            {data.slice(0,6).map((product:TProduct) => {
              return (
                <Products key={product.id} {...product}/>
              );
            })}
          </div>
          <div className="content__go">
            <Link href="/">
              <button>see everything</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
