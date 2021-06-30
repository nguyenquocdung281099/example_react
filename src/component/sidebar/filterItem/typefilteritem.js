import { useEffect, useState } from "react";
import React from "react";

export default function TypeFilterItem(props) {
  let [checked, setchecked] = useState(false);
  function CheckedInput() {
    if (!checked) {
      props.handleTypeFilter(props.type.name, !checked);
    } else {
      props.handleTypeFilter(props.type.name, !checked);
    }
    setchecked(!checked);
  }
  useEffect(() => {
    if (props.search !== "") {
      setchecked(false);
    }
  }, [props.search]);

  useEffect(() => {
    if (Object.keys(props.filter).length === 0) {
      setchecked(false);
    }
  }, [props.filter]);

  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={props.type.name}
        defaultChecked={checked}
        value={props.type.name}
        checked={checked}
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
