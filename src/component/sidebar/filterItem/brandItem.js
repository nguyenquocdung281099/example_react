import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (Object.keys(props.filter).length === 0) {
      setchecked(false);
    }
  }, [props.filter]);

  return (
    <div className="ml-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={props.brand.name}
        defaultChecked={checked}
        value={props.brand.name}
        onClick={() => {
          CheckedInput();
        }}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={props.brand.name}>
        {props.brand.name}({props.brand.count})
      </label>
    </div>
  );
}
