import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import BrandFilter from "./filter/brandFilter";
import NavList from "./filter/navlist";
import Typefilter from "./filter/typefiler";
import Ratings from "./filter/Ratings";
import PriceFilter from "./filter/priceFilter";
import { changefilter, getfilter } from "../../redux/action";

export default function Sidebar(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.ProductReducer);
  let filter = state.filter;

  let datas = state.dataGetFilter || [];
  function checkHave(array, value) {
    return array.findIndex((item) =>
      item.name ? item.name === value : item === value
    );
  }
  let categories = [];
  datas.forEach((item) => {
    let lv0 = item.hierarchicalCategories.lvl0;
    if (checkHave(categories, lv0) === -1) {
      lv0 = {
        name: lv0,
        lv1: [],
      };
      categories.push(lv0);
    }
  });
  categories.forEach((item) => {
    datas.forEach((itemC) => {
      let lv0 = itemC.hierarchicalCategories.lvl0;
      if (item.name === lv0) {
        if (itemC.hierarchicalCategories.lvl1) {
          let ind = item.lv1.findIndex(
            (item) => item.name === itemC.hierarchicalCategories.lvl1
          );
          if (ind === -1) {
            let itemlv = {
              name: itemC.hierarchicalCategories.lvl1,
            };
            item.lv1.push(itemlv);
          }
        }
      }
    });
  });
  categories.forEach((item) => {
    item.lv1.forEach((itemx) => {
      let i = itemx.name.indexOf(">");
      itemx.name = itemx.name.slice(i + 2);
    });
  });

  useEffect(() => {
    let filters = { ...filter };
    if (filters.categories_like) {
      filters.categories_like = "";
    }
    if (filters._sort && filters._order) {
      delete filters._sort;
      delete filters._order;
    }
    dispatch(getfilter(filters));
  }, [filter, dispatch]);

  let category = categories.filter((item, key) => key < 10);
  datas = category.map((item, index) => {
    return <NavList key={index} id={index} data={item} />;
  });

  return (
    <div className="pt-2 mt-5 pt-5 filter">
      {Object.keys(filter).length !== 0 && (
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => {
            dispatch(changefilter({}));
          }}
        >
          Clear Filter
        </button>
      )}
      <h3>Show results for</h3>
      {datas}
      <h3>Refine by</h3>
      <Typefilter />
      <h4>Brand</h4>
      <BrandFilter />
      <h4>Ratings</h4>
      <Ratings />
      <h4>Price</h4>

      <PriceFilter revicedPrice={props.revicedPrice} />
    </div>
  );
}
