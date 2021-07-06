import { useEffect } from "react";
import ItemRaiting from "../filterItem/itemRating";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getFilterRating } from "../../../redux/action";
import { getRatings } from "../function";

export default function Ratings() {
  function getIndex(array, value) {
    return array.findIndex((item) => item.rating === value);
  }

  const state = useSelector((state) => state.ProductReducer);
  const data = state.dataRating;
  const filter = state.filter;
  const dispatch = useDispatch();

  useEffect(() => {
    let rait = { ...filter };
    if (rait.rating_gte) {
      delete rait.rating_gte;
    }
    dispatch(getFilterRating(rait));
  }, [filter, dispatch]);

  const ratings = getRatings(data, getIndex);
  return (
    <ul>
      {ratings.map((item, index) => (
        <ItemRaiting item={item} key={index} />
      ))}
    </ul>
  );
}
