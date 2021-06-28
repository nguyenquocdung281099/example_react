import { useState } from "react";

export default function BrandFilterItem(props) {
  let [checked, setchecked] = useState(false);
  function CheckedInput() {
    if (!checked) {
      props.revicedBrandFilter(props.brand.name, !checked);
    } else {
      props.revicedBrandFilter(props.brand.name, !checked);
    }
    setchecked(!checked);
  }
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={props.brand.name}
        defaultChecked={checked}
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
