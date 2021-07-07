import TypeFilterItem from "../filterItem/typeFilterItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import { getTypes } from "../function";
import { asynGetType } from "../../../redux/thunk/thunk";
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
    dispatch(asynGetType(filters));
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
