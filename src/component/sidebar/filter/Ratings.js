import { useEffect, useState } from "react";
import ItemRaiting from "../filterItem/itemRating";
import { getDataRating } from "../function";
import React from "react";

export default function Ratings(props) {
  const { filter, handleRating } = props;
  const [rating, setRating] = useState([]);

  function getIndex(array, value) {
    return array.findIndex((item) => item.rating === value);
  }

  useEffect(() => {
    getDataRating(filter, getIndex, setRating);
  }, [props.filter]);

  return (
    <ul>
      {rating.map((item, index) => (
        <ItemRaiting
          filter={filter}
          item={item}
          key={`rating-${index}`}
          handleRating={handleRating}
        />
      ))}
    </ul>
  );
}
