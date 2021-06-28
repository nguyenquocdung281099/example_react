import axios from "axios";
import { useEffect, useState } from "react";
import queryString from "query-string";
import TypeFilterItem from "../filterItem/typefilteritem";
export default function Typefilter(props) {
  let [type, settype] = useState([]);

  function checkHave(array, value) {
    return array.findIndex((item) =>
      item.name ? item.name === value : item === value
    );
  }

  useEffect(() => {
    async function fetchdata() {
      let filter = { ...props.filter };
      if (filter.type) {
        delete filter.type;
      }
      let param = queryString.stringify(filter);
      let url = `http://localhost:8000/api/product?${param}&`;
      console.log(url);
      let data = await axios.get(url);
      data = data.data;
      let Type = [];
      data.forEach((itemd) => {
        let item = {};
        if (checkHave(Type, itemd.type) === -1) {
          item = { name: itemd.type, count: 1 };
          Type.push(item);
        } else {
          Type[checkHave(Type, itemd.type)].count += 1;
        }
      });
      Type.sort((a, b) => b.count - a.count);
      Type = Type.filter((item, key) => key < 5);
      settype(Type);
    }
    fetchdata();
    // eslint-disable-next-line
  }, [props.filter]);
  let datas = type.map((item, key) => (
    <TypeFilterItem
      revicedTypeFilter={props.revicedTypeFilter}
      type={item}
      key={key}
      search={props.search}
      filter={props.filter}
    />
  ));
  return <div className="p-3">{datas}</div>;
}
