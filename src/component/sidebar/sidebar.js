import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import BrandFilter from "./filter/brandFilter";
import NavList from "./filter/navList";
import TypeFilter from "./filter/typeFiler";
import Ratings from "./filter/ratings";
import PriceFilter from "./filter/priceFilter";
import { changeFilter } from "../../redux/action";
import { getDataCategory } from "./function";
import { asynGetCategories } from "../../redux/thunk/thunk";

export default function SideBar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ProductReducer);
  const filter = state.filter;
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
    dispatch(asynGetCategories(filters));
  }, [filter, dispatch]);

  const category = getDataCategory(datas);

  return (
    <div className="pt-2 mt-5 pt-5 filter">
      {Object.keys(filter).length !== 0 && (
        <button
          type="button"
          className="btn btn-danger"
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
      <TypeFilter />
      <h4>Brand</h4>
      <BrandFilter />
      <h4>Ratings</h4>
      <Ratings />
      <h4>Price</h4>
      <PriceFilter />
    </div>
  );
}
