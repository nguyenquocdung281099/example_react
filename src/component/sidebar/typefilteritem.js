import { useEffect, useState } from "react";

export default function TypeFilterItem(props) {
  let [checked, setchecked] = useState(false);
  function CheckedInput() {
    if (!checked) {
      props.revicedTypeFilter(props.type.name, !checked);
    } else {
      props.revicedTypeFilter(props.type.name, !checked);
    }
    setchecked(!checked);
  }
  useEffect(() => {
    if (props.search !== "") {
      setchecked(false);
    }
  }, [props.search]);
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={props.type.name}
        defaultChecked={checked}
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
