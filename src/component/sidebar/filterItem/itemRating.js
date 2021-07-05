import { useDispatch, useSelector } from "react-redux";
import { changefilter } from "../../../redux/action";

export default function ItemRaiting(props) {
  let data = [];
  const filter = useSelector((state) => state.ProductReducer.filter);
  const dispatch = useDispatch();
  for (let i = 1; i <= 5; i++) {
    if (i <= props.item.rating) {
      data[data.length] = <i className="fas fa-star" key={i}></i>;
    } else {
      data[data.length] = <i className="far fa-star" key={i}></i>;
    }
  }
  function handleRatingitem(e) {
    let filters = { ...filter, rating_gte: props.item.rating };
    dispatch(changefilter(filters));
  }

  return (
    <li
      className={
        filter.rating_gte === props.item.rating ? "star active" : "star"
      }
      onClick={handleRatingitem}
    >
      {data} &#38; upto {props.item.count}
    </li>
  );
}
