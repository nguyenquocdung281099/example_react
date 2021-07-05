import TypeFilterItem from "../filterItem/typefilteritem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getfiltertype } from "../../../redux/action";
export default function Typefilter(props) {
  function checkIndex(array, value) {
    return array.findIndex((item) =>
      item.name ? item.name === value : item === value
    );
  }

  const state = useSelector((state) => state.ProductReducer);
  let data = state.datatype;
  let dispatch = useDispatch();
  let filter = state.filter;
  useEffect(() => {
    let filters = { ...filter };
    if (filters.type) {
      delete filters.type;
    }
    dispatch(getfiltertype(filters));
  }, [filter,dispatch]);

  let Type = [];
  data.forEach((itemd) => {
    let item = {};
    if (checkIndex(Type, itemd.type) === -1) {
      item = { name: itemd.type, count: 1 };
      Type.push(item);
    } else {
      Type[checkIndex(Type, itemd.type)].count += 1;
    }
  });
  Type.sort((a, b) => b.count - a.count);
  Type = Type.filter((item, key) => key < 5);

  let datas = Type.map((item, key) => (
    <TypeFilterItem type={item} key={item.name} />
  ));
  return <div className="p-3">{datas}</div>;
}
