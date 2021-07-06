import React from "react";
import { handleVeiwRating } from "../sidebar/function";
export default function ItemProduct(props) {
  const { rating, image, name, price } = props.item;

  let data = handleVeiwRating(rating);
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{name}e</h5>
        <div className="d-flex justify-content-between">
          <div className="star">{data}</div>
          <p className="card-text">{price}$</p>
        </div>
      </div>
    </div>
  );
}
