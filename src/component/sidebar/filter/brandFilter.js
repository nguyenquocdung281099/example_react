import { useEffect, useState } from "react";
import BrandFilterItem from "../filterItem/brandItem";
import { useDispatch, useSelector } from "react-redux";
import { getfilterbrand } from "../../../redux/action";

export default function BrandFilter(props) {
  let [valueSearchBrand, setvaluesearchBrand] = useState("");

  function handleSearchBrand(e) {
    setvaluesearchBrand(e.target.value);
  }

  function checkIndex(array, value) {
    return array.findIndex((item) =>
      item.name ? item.name === value : item === value
    );
  }
  const state = useSelector((state) => state.ProductReducer);

  let filters = { ...state.filter };

  const data = state.databrand;
  let brand = [];
  data.forEach((itemd) => {
    let item = {};
    if (checkIndex(brand, itemd.brand) === -1) {
      item = { name: itemd.brand, count: 1 };
      brand.push(item);
    } else {
      brand[checkIndex(brand, itemd.brand)].count += 1;
    }
  });

  if (valueSearchBrand !== "") {
    brand = brand.filter((item) => item.name.indexOf(valueSearchBrand) !== -1);
  }

  useEffect(() => {
    brand.sort((a, b) => b.count - a.count);
  }, []);
  brand = brand.filter((item, key) => key < 5);
  const dispatch = useDispatch();
  useEffect(() => {
    if (filters.brand) {
      delete filters.brand;
    }
    dispatch(getfilterbrand(filters));

    // eslint-disable-next-line
  }, [state.filter]);
  return (
    <>
      <input
        type="text"
        value={valueSearchBrand}
        onChange={handleSearchBrand}
      />
      {brand.map((item, index) => (
        <BrandFilterItem filter={props.filter} brand={item} key={item.name} />
      ))}
    </>
  );
}
