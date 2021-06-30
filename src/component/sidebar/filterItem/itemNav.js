import { useState } from "react";
import React from "react";

export default function ItemNav(props) {
  const [show, setshow] = useState(true);
  const { category, handleContentFilter, handleshow } = props;

  return (
    <li className="itemNav">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          handleshow();
          if (show) {
            handleContentFilter(category);
          } else {
            handleContentFilter("");
          }
          console.log(show);

          setshow(!show);
        }}
      >
        &#62; {category}
      </a>
    </li>
  );
}
