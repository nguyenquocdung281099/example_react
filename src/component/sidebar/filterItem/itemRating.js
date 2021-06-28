import { useEffect } from "react";

export default function ItemRaiting(props) {
  let data = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= props.item.rating) {
      data[data.length] = <i className="fas fa-star" key={i}></i>;
    } else {
      data[data.length] = <i className="far fa-star" key={i}></i>;
    }
  }
  function handleRatingitem(e) {
    props.revicedRating(props.item.rating);
  }
  
 

  return (
    <li className="star " onClick={handleRatingitem}>
      {data} &#38; upto {props.item.count}
    </li>
  );
}
