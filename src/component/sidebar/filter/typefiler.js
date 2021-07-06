import TypeFilterItem from "../filterItem/typefilteritem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFilterType } from "../../../redux/action";
import React from "react";
import { getTypes } from "../function";
export default function Typefilter() {
  const state = useSelector((state) => state.ProductReducer);
  let data = state.dataType;
  let dispatch = useDispatch();
  let filter = state.filter;

  useEffect(() => {
    let filters = { ...filter };
    if (filters.type) {
      delete filters.type;
    }
    dispatch(getFilterType(filters));
  }, [filter, dispatch]);

  const type = getTypes(data);

  return (
    <div className="p-3">
      {type.map((item) => (
        <TypeFilterItem type={item} key={item.name} />
      ))}
    </div>
  );
}
