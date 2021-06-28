import axios from "axios";
import { useEffect, useState } from "react";
import BrandFilter from "./brandFilter";

import NavList from "./navlist";
import Typefilter from "./typefiler";

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
      let url = "http://localhost:8000/api/product";
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
      console.log(datas);
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
      console.log(categories);
    }
    fetchdata();
  }, [props.url]);

  let categoryy = category.filter((item, key) => key < 10);
  datas = categoryy.map((item, index) => {
    return (
      <NavList
        idactive={props.idactive}
        key={index}
        id={index}
        data={item}
        revicedContentFilter={props.revicedContentFilter}
      />
    );
  });

  return (
    <div className="pt-2">
      <h3>Show results for</h3>
      {datas}
      <h3>Refine by</h3>
      <Typefilter
        url2={props.url2}
        revicedTypeFilter={props.revicedTypeFilter}
        url={props.url}
        search={props.search}
        valuetypefilter={props.valuetypefilter}
        filter={props.filter}
      />
      <h4>Brand</h4>
      <BrandFilter
        url2={props.url2}
        revicedBrandFilter={props.revicedBrandFilter}
      />
    </div>
  );
}
