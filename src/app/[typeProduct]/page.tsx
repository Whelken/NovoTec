import React, { Component, useEffect, useState } from "react";
import "./page.css"
import { Products } from "../../../components/products/Products";
import Link from "next/link";

const api = async (params:string): Promise<TProduct[]> => {
  let url = "http://localhost:3000/api/";

  if (params === "all") {
    url += "tasks";
  } else if (params === "bestSellers") {
    url += "bestSellers";
  } else if (params === "offer") {
    url += "ofertes";
  } else {
    url += `product/${params}`;
  }

  const data: Response = await fetch(url, {
    cache: "no-store",
  });

  const allData: TProduct[] = await data.json();
  return allData;
};

const Brands = async ({params}:{params:{typeProduct:string}}) => {
  const date: TProduct[] = await api(params.typeProduct);

  return(
    <>
    <div className="productsForFilter__contProducts">
      {date.slice(0,6).map((products:TProduct)=>(<Products key={products.id} {...products}/>))}
    </div>
    <div className="productsForFilter__contButtonMore">
    </div>
    </>
  )
};

export default Brands;
