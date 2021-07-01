import { useEffect } from "react";
import ItemRaiting from "../filterItem/itemRating";
import { useDispatch, useSelector } from "react-redux";
import { getfilterrating } from "../../../redux/action";

export default function Ratings(props) {
  function checkIndex(array, value) {
    return array.findIndex((item) => item.rating === value);
  }

  const state = useSelector((state) => state.ProductReducer);
  const data = state.dataRating;
  const filter = state.filter;
  const dispatch = useDispatch();
  let Ratings = [];
  data.forEach((itemd) => {
    let item = {};
    if (checkIndex(Ratings, itemd.rating) === -1) {
      item = { rating: itemd.rating, count: 0 };
      Ratings.push(item);
    }
  });
  Ratings.forEach((item) => {
    data.forEach((itemdata) => {
      if (item.rating <= itemdata.rating) {
        item.count += 1;
      }
    });
  });
  Ratings = Ratings.sort((a, b) => -a.rating + b.rating);
  Ratings = Ratings.filter((item, index) => index > 0);
  useEffect(() => {
    let rait = { ...filter };
    if (rait.rating_gte) {
      delete rait.rating_gte;
    }
    dispatch(getfilterrating(rait));
  }, [filter]);

  return (
    <ul>
      {Ratings.map((item, index) => (
        <ItemRaiting
          item={item}
          key={index}
        />
      ))}
    </ul>
  );
}
