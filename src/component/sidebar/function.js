import queryString from "query-string";
import axios from "axios";
import { URL_PRODUCT } from "../../const";
import React from "react";

function getIndex(array, value) {
  return array.findIndex((item) =>
    item.name ? item.name === value : item === value
  );
}

export const getDataCategories = async (
  filters,
  statustype,
  valuetypefilter,
  setcategory
) => {
  let filter = { ...filters };
  if (filter.categories_like) {
    filter.categories_like = "";
  }
  let param = queryString.stringify(filter);
  let url = `http://localhost:8000/api/product?${param}&`;
  let data = await axios.get(url);
  console.log(data);
  data = data.data;
  let datas = [...data];
  if (statustype === true) {
    datas = [];
    valuetypefilter.forEach((itemf) => {
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
    if (getIndex(categories, lv0) === -1) {
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
};

export const getDataRating = async (filter, getIndex, setRating) => {
  let ratings = [];
  let rait = { ...filter };
  if (rait.rating_gte) {
    delete rait.rating_gte;
  }
  let param = queryString.stringify(rait);
  let url = `${URL_PRODUCT}?${param}`;
  let datas = await axios.get(url);
  let data = datas.data;
  data.forEach((itemd) => {
    let item = {};
    if (getIndex(ratings, itemd.rating) === -1) {
      item = { rating: itemd.rating, count: 0 };
      ratings.push(item);
    }
  });
  ratings.forEach((item) => {
    data.forEach((itemData) => {
      if (item.rating <= itemData.rating) {
        item.count += 1;
      }
    });
  });
  ratings = ratings.sort((a, b) => -a.rating + b.rating);
  ratings = ratings.filter((item, index) => index > 0);
  setRating(ratings);
};

export const getBrand = async (filters, setBrand, valueSearchBrand) => {
  let filter = { ...filters };
  if (filter.brand) {
    delete filter.brand;
  }
  console.log("brand ", filters);
  let param = queryString.stringify(filter);
  let url = `http://localhost:8000/api/product?${param}&`;
  let datas = await axios.get(url);
  let data = datas.data;
  let brand = [];
  data.forEach((itemd) => {
    let item = {};
    if (getIndex(brand, itemd.brand) === -1) {
      item = { name: itemd.brand, count: 1 };
      brand.push(item);
    } else {
      brand[getIndex(brand, itemd.brand)].count += 1;
    }
  });
  if (valueSearchBrand !== "") {
    brand = brand.filter((item) => item.name.indexOf(valueSearchBrand) !== -1);
  }
  brand.sort((a, b) => b.count - a.count);
  brand = brand.filter((item, key) => key < 5);
  setBrand(brand);
};

export const getType = async (filters, setType) => {
  let filter = { ...filters };
  if (filter.type) {
    delete filter.type;
  }
  let param = queryString.stringify(filter);
  let url = `http://localhost:8000/api/product?${param}&`;
  let datas = await axios.get(url);
  let data = datas.data;
  let type = [];
  data.forEach((itemd) => {
    let item = {};
    if (getIndex(type, itemd.type) === -1) {
      item = { name: itemd.type, count: 1 };
      type.push(item);
    } else {
      type[getIndex(type, itemd.type)].count += 1;
    }
  });
  type.sort((a, b) => b.count - a.count);
  type = type.filter((item, key) => key < 5);
  setType(type);
};

export const showStar = (rating) => {
  let data = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      data[data.length] = <i className="fas fa-star" key={`star-${i}`}></i>;
    } else {
      data[data.length] = <i className="far fa-star" key={`star-${i}`}></i>;
    }
  }
  return data;
};
