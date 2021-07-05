import { useEffect, useState } from "react";
import BrandFilterItem from "../filterItem/brandItem";
import { useDispatch, useSelector } from "react-redux";
import { getFilterBrand } from "../../../redux/action";
import { getBrand } from "../funtion";

export default function BrandFilter(props) {
  let [valueSearchBrand, setValueSearchBrand] = useState("");

  function handleSearchBrand(e) {
    setValueSearchBrand(e.target.value);
  }
  const state = useSelector((state) => state.ProductReducer);
  let filters = { ...state.filter };
  const data = state.dataBrand;
  const brand = getBrand(data, valueSearchBrand);
  const dispatch = useDispatch();
  useEffect(() => {
    if (filters.brand) {
      delete filters.brand;
    }
    dispatch(getFilterBrand(filters));
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
