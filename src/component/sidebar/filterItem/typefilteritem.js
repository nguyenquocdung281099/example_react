import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changefilter } from "../../../redux/action";

export default function TypeFilterItem(props) {
  let [checked, setchecked] = useState(false);
  let filter = useSelector((state) => state.ProductReducer.filter);
  let Type = filter.type || [];
  const dispatch = useDispatch();
  function CheckedInput() {
    if (!checked) {
      Type.push(props.type.name);
    } else {
      const index = Type.findIndex((item) => item === props.type.name);
      console.log(index);
      Type.splice(index, 1);
    }
    filter = { ...filter, type: Type };
    dispatch(changefilter(filter));
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
        id={props.type.name}
        checked={checked}
        value={props.type.name}
        onClick={() => {
          CheckedInput();
        }}
      />
      <label className="form-check-label" htmlFor={props.type.name}>
        {props.type.name}({props.type.count})
      </label>
    </div>
  );
}
