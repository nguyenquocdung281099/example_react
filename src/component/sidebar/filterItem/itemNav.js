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
          if (show) {
            props.revicedContentFilter(props.category);
          } else {
            props.revicedContentFilter("");
          }
          console.log(show);

          setshow(!show);
        }}
      >
        &#62; {props.category}
      </a>
    </li>
  );
}
