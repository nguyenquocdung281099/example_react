import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../../redux/action";
import React from "react";
import { handleVeiwRating } from "../function";

export default function ItemRaiting(props) {
  const filter = useSelector((state) => state.ProductReducer.filter);
  const dispatch = useDispatch();
  const { count, rating } = props.item;
  const data = handleVeiwRating(rating);
  function handleRatingitem() {
    let filters = { ...filter, rating_gte: rating };
    dispatch(changeFilter(filters));
  }

  return (
    <li
      className={filter.rating_gte === rating ? "star active" : "star"}
      onClick={handleRatingitem}
    >
      {data} &#38; upto {count}
    </li>
  );
}
