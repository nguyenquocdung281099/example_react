import { useState } from "react";
import ItemPriceFilter from "../filterItem/itemPriceFilter";
import React from "react";

export default function PriceFilter(props) {
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  let price = [
    {
      max: 1,
    },
    {
      min: 1,
      max: 80,
    },
    {
      min: 81,
      max: 160,
    },
    {
      min: 161,
      max: 240,
    },
    {
      min: 250,
    },
  ];

  function filterPrice() {
    props.handlePrice(min, max);
    setMax("");
    setMin("");
  }

  function setMinmax(min, max) {
    setMin(min);
    setMax(max);
    props.handlePrice(min, max);
  }

  return (
    <ul className="pricefilter">
      {price.map((item, index) => (
        <ItemPriceFilter
          item={item}
          key={`price-${index}`}
          setMinmax={setMinmax}
        />
      ))}
      <div className="d-flex">
        <label htmlFor="minNumber">$</label>
        <input
          type="number"
          id="minNumber"
          value={min}
          onChange={(e) => {
            setMin(e.target.value);
          }}
        />
        <span>to</span>
        <label htmlFor="maxNumber">$</label>
        <input
          type="number"
          id="maxNumber"
          value={max}
          onChange={(e) => {
            setMax(e.target.value);
          }}
        />
        <button onClick={filterPrice}>go</button>
      </div>
    </ul>
  );
}
