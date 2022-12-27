import React from "react";
import { ProductHolder } from "../ProductComponent/ProductComponent";
import "./ProductComponentHolder.css";

interface props {
  key: number;
  h3: string;
  array: {
    img: string;
    type: string;
  }[];
}

export const ProductComponentHolder = ({ h3, key, array }: props) => {
  return (
    <div className="component-holder-wrapper" key={key}>
      <div>
        <h3>{h3}</h3>
      </div>
      {array.map((carving) => (
        <ProductHolder img={carving.img} />
      ))}
    </div>
  );
};
