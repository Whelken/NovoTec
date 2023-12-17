"use client"
import React, { useState } from 'react';
import { Products } from '../products/Products';

export const ProductFilter = (date:TProduct[]) => {
    const [more,setMore] = useState(6)
  return (
    <>
      <div className="productsForFilter__contProducts">
        {date.slice(0, more).map((products: TProduct) => (
          <Products {...products} />
        ))}
      </div>
      <div className="productsForFilter__contButtonMore">
        <button
          onClick={() => {
            setMore((p) => p + 1), console.log(more);
          }}
        >
          masfsdfs
        </button>
      </div>
    </>
  );
};

