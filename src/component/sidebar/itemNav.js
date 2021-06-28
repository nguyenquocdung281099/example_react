import { useState } from "react";

export default function ItemNav(props) {
  let [show, setshow] = useState(true);
  return (
    <li className="itemNav">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          props.handleshow();
          props.revicedContentFilter(props.category, show, props.id);
          setshow(!show);
        }}
      >
        &#62; {props.category}
      </a>
    </li>
  );
}
