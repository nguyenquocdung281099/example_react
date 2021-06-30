import { useEffect, useState } from "react";
import BrandFilter from "./filter/brandFilter";
import React from "react";

import NavList from "./filter/navList";
import Typefilter from "./filter/typeFiler";

import Ratings from "./filter/ratings";
import PriceFilter from "./filter/priceFilter";
import { getDataCategories } from "./function";

export default function Sidebar(props) {
  let [category, setcategory] = useState([]);
  const {
    filter,
    statustype,
    valuetypefilter,
    url,
    handleContentFilter,
    handleTypeFilter,
    search,
    handleRating,
    handleBrandFilter,
    handlePrice,
    clearFilter,
  } = props;

  useEffect(() => {
    getDataCategories(filter, statustype, valuetypefilter, setcategory);
  }, [url]);

  const categories = category.filter((item, key) => key < 10);

  return (
    <div className="pt-2 mt-5 pt-5 filter">
      {Object.keys(filter).length !== 0 && (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            clearFilter();
          }}
        >
          Clear Filter
        </button>
      )}
      <h3>Show results for</h3>
      {categories.map((item, index) => {
        return (
          <NavList
            filter={filter}
            key={`categoryy-${index}`}
            id={index}
            data={item}
            handleContentFilter={handleContentFilter}
          />
        );
      })}
      <h3>Refine by</h3>
      <Typefilter
        filter={filter}
        handleTypeFilter={handleTypeFilter}
        url={url}
        search={search}
        valuetypefilter={valuetypefilter}
      />
      <h4>Brand</h4>
      <BrandFilter filter={filter} handleBrandFilter={handleBrandFilter} />
      <h4>Ratings</h4>
      <Ratings filter={filter} handleRating={handleRating} />
      <h4>Price</h4>

      <PriceFilter handlePrice={handlePrice} />
    </div>
  );
}
