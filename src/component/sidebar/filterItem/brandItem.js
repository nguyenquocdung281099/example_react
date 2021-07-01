import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changefilter } from "../../../redux/action";

export default function BrandFilterItem(props) {
  let [checked, setchecked] = useState(false);

  let filter = useSelector((state) => state.ProductReducer.filter);
  let Brand = filter.brand || [];
  const dispatch = useDispatch();
  function CheckedInput() {
    if (!checked) {
      Brand.push(props.brand.name);
    } else {
      const index = Brand.findIndex((item) => item === props.brand.name);
      Brand.splice(index, 1);
    }
    let filters = { ...filter, brand: Brand };
    dispatch(changefilter(filters));
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
        id={props.brand.name}
        checked={checked}
        value={props.brand.name}
        onClick={() => {
          CheckedInput();
        }}
      />
      <label className="form-check-label" htmlFor={props.brand.name}>
        {props.brand.name}({props.brand.count})
      </label>
    </div>
  );
}
