import { useState } from "react";
import ItemPriceFilter from "../filterItem/itempricefilter";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../../redux/action";

export default function PriceFilter(props) {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const filter = useSelector((state) => state.ProductReducer.filter);
  const dispatch = useDispatch();
  let price = [
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

  function dispatchPrice(min, max, filter) {
    let price = {};
    if (min !== "") {
      price = { price_gte: min };
    }
    if (max !== "") {
      price = { ...price, price_lte: max };
    }
    price = { ...filter, ...price };
    dispatch(changeFilter(price));
  }
  function filterPrice() {
    dispatchPrice(min, max, filter);
  }

  function setMinmax(min, max) {
    setMin(min);
    setMax(max);
    dispatchPrice(min, max, filter);
  }

  let data = price.map((item, index) => (
    <ItemPriceFilter item={item} key={index} setMinmax={setMinmax} />
  ));

  return (
    <ul className="pricefilter">
      {data}
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
