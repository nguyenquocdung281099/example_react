import React from "react";
import { showStar } from "../function";

export default function ItemRaiting(props) {
  const { rating, count } = props.item;

  function handleRatingitem() {
    props.handleRating(rating);
  }

  return (
    <li className="star " onClick={handleRatingitem}>
      {showStar(rating)} &#38; upto {count}
    </li>
  );
}
