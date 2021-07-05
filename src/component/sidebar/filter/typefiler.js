import TypeFilterItem from "../filterItem/typefilteritem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFilterType } from "../../../redux/action";
import { getTypes } from "../funtion";
export default function Typefilter(props) {
  const state = useSelector((state) => state.ProductReducer);
  let data = state.dataType;
  let dispatch = useDispatch();
  let filter = state.filter;
  useEffect(() => {
    let filters = { ...filter };
    if (filters.type) {
      delete filters.type;
    }
    dispatch(getFilterType(filters));
  }, [filter, dispatch]);
  const type = getTypes(data);
  return (
    <div className="p-3">
      {type.map((item, key) => (
        <TypeFilterItem type={item} key={item.name} />
      ))}
    </div>
  );
}
