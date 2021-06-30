import { useEffect, useState } from "react";
import BrandFilterItem from "../filterItem/brandItem";
import { getBrand } from "../function";
import React from "react";

export default function BrandFilter(props) {
  let [valueSearchBrand, setValuesearchBrand] = useState("");
  let [Brand, setBrand] = useState([]);

  function handleSearchBrand(e) {
    setValuesearchBrand(e.target.value);
  }

  const { filter } = props;
  useEffect(() => {
    getBrand(filter, setBrand, valueSearchBrand);
    // eslint-disable-next-line
  }, [props.filter, valueSearchBrand]);
  return (
    <>
      <input
        type="text"
        value={valueSearchBrand}
        onChange={handleSearchBrand}
      />
      {Brand.map((item) => (
        <BrandFilterItem
          filter={props.filter}
          brand={item}
          key={`brand-${item.name}`}
          handleBrandFilter={props.handleBrandFilter}
        />
      ))}
    </>
  );
}
