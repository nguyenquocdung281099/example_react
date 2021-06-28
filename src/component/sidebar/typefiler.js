import axios from "axios";
import { useEffect, useState } from "react";
import TypeFilterItem from "./typefilteritem";
export default function Typefilter(props) {
  let [type, settype] = useState([]);

  function checkHave(array, value) {
    return array.findIndex((item) =>
      item.name ? item.name === value : item === value
    );
  }

  useEffect(() => {
    async function fetchdata() {
      let url = props.url2;
      console.log(props.url2);
      console.log("url type :", url);
      let data = await axios.get(url);
      data = data.data;
      let Type = [];
      console.log(datas);
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
  }, [props.url2]);
  let datas = type.map((item, key) => (
    <TypeFilterItem
      revicedTypeFilter={props.revicedTypeFilter}
      type={item}
      key={key}
      search={props.search}
    />
  ));
  return <div className="p-3">{datas}</div>;
}
