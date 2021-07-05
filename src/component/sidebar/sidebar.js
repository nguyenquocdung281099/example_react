import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import BrandFilter from "./filter/brandFilter";
import NavList from "./filter/navlist";
import Typefilter from "./filter/typefiler";
import Ratings from "./filter/Ratings";
import PriceFilter from "./filter/priceFilter";
import { changeFilter, getFilter } from "../../redux/action";
import { getDataCategory } from "./funtion";

export default function Sidebar(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ProductReducer);
  let filter = state.filter;
  let datas = state.dataGetFilter || [];

  useEffect(() => {
    let filters = { ...filter };
    if (filters.categories_like) {
      filters.categories_like = "";
    }
    if (filters._sort && filters._order) {
      delete filters._sort;
      delete filters._order;
    }
    dispatch(getFilter(filters));
  }, [filter, dispatch]);

  let category = getDataCategory(datas);

  return (
    <div className="pt-2 mt-5 pt-5 filter">
      {Object.keys(filter).length !== 0 && (
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => {
            dispatch(changeFilter({}));
          }}
        >
          Clear Filter
        </button>
      )}
      <h3>Show results for</h3>
      {category.map((item, index) => {
        return <NavList key={index} id={index} data={item} />;
      })}
      <h3>Refine by</h3>
      <Typefilter />
      <h4>Brand</h4>
      <BrandFilter />
      <h4>Ratings</h4>
      <Ratings />
      <h4>Price</h4>
      <PriceFilter />
    </div>
  );
}
