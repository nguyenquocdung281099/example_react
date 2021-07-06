import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../../redux/action";
import React from "react";

export default function BrandFilterItem(props) {
  const [checked, setchecked] = useState(false);
  const { name, count } = props.brand;
  const filter = useSelector((state) => state.ProductReducer.filter);
  const brand = filter.brand || [];
  const dispatch = useDispatch();

  function CheckedInput() {
    if (!checked) {
      brand.push(name);
    } else {
      const index = brand.findIndex((item) => item === name);
      brand.splice(index, 1);
    }
    let filters = { ...filter, brand: brand };
    dispatch(changeFilter(filters));
    setchecked(!checked);
  }
  
  useEffect(() => {
    if (Object.keys(filter).length === 0) {
      setchecked(false);
    }
  }, [filter]);

  return (
    <div className="ml-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={name}
        checked={checked}
        value={name}
        onClick={() => {
          CheckedInput();
        }}
      />
      <label className="form-check-label" htmlFor={name}>
        {name}({count})
      </label>
    </div>
  );
}
