import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../../redux/action";
import React from "react";

export default function ItemNav(props) {
  const [show, setshow] = useState(true);
  const filter = useSelector((state) => state.ProductReducer.filter);
  const dispatch = useDispatch();
  const { category } = props;
  
  return (
    <li className="itemNav">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          props.handleshow();
          if (show) {
            dispatch(changeFilter({ ...filter, categories_like: category }));
          } else {
            dispatch(changeFilter({ ...filter, categories_like: "" }));
          }
          setshow(!show);
        }}
        className={filter.categories_like === category ? "active" : ""}
      >
        &#62; {category}
      </a>
    </li>
  );
}
