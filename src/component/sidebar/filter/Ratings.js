import axios from "axios";
import { useEffect, useState } from "react";
import queryString from "query-string";
import { URL_PRODUCT } from "../../../const";
import ItemRaiting from "../filterItem/itemRating";

export default function Ratings(props) {
  const [rating, setRating] = useState([]);
  function checkHave(array, value) {
    return array.findIndex((item) => item.rating === value);
  }

  useEffect(() => {
    let Ratings = [];
    let rait = { ...props.filter };
    if (rait.rating_gte) {
      delete rait.rating_gte;
    }
    console.log(rait);
    let param = queryString.stringify(rait);
    let url = `${URL_PRODUCT}?${param}`;
    console.log(url);
    async function fetchdata() {
      let data = await axios.get(url);
      data = data.data;
      data.forEach((itemd) => {
        let item = {};
        if (checkHave(Ratings, itemd.rating) === -1) {
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
      setRating(Ratings);
    }
    fetchdata();
  }, [props.filter]);

  return (
    <ul>
      {rating.map((item, index) => (
        <ItemRaiting
          filter={props.filter}
          item={item}
          key={index}
          revicedRating={props.revicedRating}
        />
      ))}
    </ul>
  );
}
