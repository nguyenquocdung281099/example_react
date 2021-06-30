import React from "react";
import { showStar } from "../sidebar/function";

export default function ItemProduct(props) {
  const { rating, price, image, name } = props.item;
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{name}e</h5>
        <div className="d-flex justify-content-between">
          <div className="star">{showStar(rating)}</div>
          <p className="card-text">{price}$</p>
        </div>
      </div>
    </div>
  );
}
