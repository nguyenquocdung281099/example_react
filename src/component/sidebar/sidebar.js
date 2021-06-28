import axios from "axios";
import { useEffect, useState } from "react";
import BrandFilter from "./filter/brandFilter";

import NavList from "./filter/navlist";
import Typefilter from "./filter/typefiler";
import queryString from "query-string";
import Ratings from "./filter/Ratings";
import PriceFilter from "./filter/priceFilter";

export default function Sidebar(props) {
  let [category, setcategory] = useState([]);
  let datas = "";
  function checkHave(array, value) {
    return array.findIndex((item) =>
      item.name ? item.name === value : item === value
    );
  }
  useEffect(() => {
    async function fetchdata() {
      let filter = props.filter;
      if (filter.categories_like) {
        filter.categories_like = "";
      }
      let param = queryString.stringify(filter);
      let url = `http://localhost:8000/api/product?${param}&`;
      let data = await axios.get(url);
      data = data.data;
      let datas = [...data];
      if (props.statustype === true) {
        datas = [];
        console.log(props.valuetypefilter);
        props.valuetypefilter.forEach((itemf) => {
          data.forEach((item) => {
            if (item.type === itemf) {
              datas.push(item);
            }
          });
        });
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
      setcategory(categories);
    }
    fetchdata();
  }, [props.url]);

  let categoryy = category.filter((item, key) => key < 10);
  datas = categoryy.map((item, index) => {
    return (
      <NavList
        filter={props.filter}
        idactive={props.idactive}
        key={index}
        id={index}
        data={item}
        revicedContentFilter={props.revicedContentFilter}
      />
    );
  });

  return (
    <div className="pt-2 mt-5 pt-5 filter">
      {Object.keys(props.filter).length !== 0 && (
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => {
            props.clearFilter();
          }}
        >
          Clear Filter
        </button>
      )}
      <h3>Show results for</h3>
      {datas}
      <h3>Refine by</h3>
      <Typefilter
        filter={props.filter}
        revicedTypeFilter={props.revicedTypeFilter}
        url={props.url}
        search={props.search}
        valuetypefilter={props.valuetypefilter}
        filter={props.filter}
      />
      <h4>Brand</h4>
      <BrandFilter
        filter={props.filter}
        revicedBrandFilter={props.revicedBrandFilter}
      />
      <h4>Ratings</h4>
      <Ratings filter={props.filter} revicedRating={props.revicedRating} />
      <h4>Price</h4>

      <PriceFilter revicedPrice={props.revicedPrice} />
    </div>
  );
}
