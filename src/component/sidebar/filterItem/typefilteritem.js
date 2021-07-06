import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../../redux/action";
import React from "react";

export default function TypeFilterItem(props) {
  const [checked, setchecked] = useState(false);
  const filter = useSelector((state) => state.ProductReducer.filter);
  let Type = filter.type || [];
  const dispatch = useDispatch();
  const { name, count } = props.type;
  function CheckedInput() {
    if (!checked) {
      Type.push(name);
    } else {
      const index = Type.findIndex((item) => item === name);
      console.log(index);
      Type.splice(index, 1);
    }
    dispatch(changeFilter({ ...filter, type: Type }));
    setchecked(!checked);
  }
  useEffect(() => {
    if (Object.keys(filter).length === 0) {
      setchecked(false);
    }
  }, [filter]);

  return (
    <div className="form-check">
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
