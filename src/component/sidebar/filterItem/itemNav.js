import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changefilter } from "../../../redux/action";

export default function ItemNav(props) {
  const [show, setshow] = useState(true);
  let filter = useSelector((state) => state.ProductReducer.filter);
  const dispatch = useDispatch();
  return (
    <li className="itemNav">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          props.handleshow();
          if (show) {
            filter = { ...filter, categories_like: props.category };
            dispatch(changefilter(filter));
          } else {
            dispatch(changefilter(""));
          }
          setshow(!show);
        }}
      >
        &#62; {props.category}
      </a>
    </li>
  );
}
