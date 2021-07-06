import React from "react";
import { changeFilter } from "../../redux/action";

function getIndex(array, value) {
  return array.findIndex((item) =>
    item.name ? item.name === value : item === value
  );
}
export const getDataCategory = (datas) => {
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
  const category = categories.filter((item, key) => key < 10);
  return category;
};
export const getBrand = (data, valueSearchBrand) => {
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
  return brand;
};

export const getRatings = (data, getIndex) => {
  let ratings = [];
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
  return ratings;
};

export const getTypes = (data) => {
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
  return type;
};

export const handleVeiwRating = (rating) => {
  let data = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      data[data.length] = <i className="fas fa-star" key={i}></i>;
    } else {
      data[data.length] = <i className="far fa-star" key={i}></i>;
    }
  }
  return data;
};
export const dispatchPrice = (min, max, filter, dispatch) => {
  let price = {};
  if (min !== "") {
    price = { price_gte: min };
  }
  if (max !== "") {
    price = { ...price, price_lte: max };
  }
  price = { ...filter, ...price };
  dispatch(changeFilter(price));
};
