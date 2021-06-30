import React from "react";

export default function ItemPriceFilter(props) {
  let datas = "";
  const { min, max } = props.item;
  if (min && max) {
    datas = (
      <li
        className="itemfilterprice"
        onClick={() => {
          props.setMinmax(min, max);
        }}
      >
        ${min}-{max}
      </li>
    );
  } else if (min && !max) {
    datas = (
      <li
        className="itemfilterprice"
        onClick={() => {
          props.setMinmax(min);
        }}
      >
        &ge; ${min}
      </li>
    );
  } else if (!min && max) {
    datas = (
      <li
        className="itemfilterprice"
        onClick={() => {
          props.setMinmax(max);
        }}
      >
        &le; ${max}
      </li>
    );
  }
  return <div>{datas}</div>;
}
