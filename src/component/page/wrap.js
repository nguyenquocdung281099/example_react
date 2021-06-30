import Header from "./header";
import BodyPage from "./bodyPage";
import { useState } from "react";
import queryString from "query-string";
import React from "react";

export default function Wrap() {
  const [filter, setFilter] = useState({});

  function clearFilter() {
    setFilter({});
  }

  function handleContentSearch(contentSearch) {
    setFilter({ ...filter, name_like: contentSearch });
  }
  function handlePrice(min, max) {
    let price = {};
    if (min !== "") {
      price = { price_gte: min };
    }
    if (max !== "") {
      price = { ...price, price_lte: max };
    }
    setFilter({ ...filter, ...price });
  }

  function handleRating(rating) {
    setFilter({ ...filter, rating_gte: rating });
  }

  function handleTypeFilter(typeFilter, status) {
    let Type = filter.type || [];
    if (status) {
      Type.push(typeFilter);
      setFilter({ ...filter, type: Type });
    } else {
      let index = filter.type.findIndex((item) => item === typeFilter);
      Type.splice(index, 1);
      setFilter({ ...filter, type: Type });
    }
  }

  function handleContentFilter(contentFilter) {
    setFilter({ ...filter, categories_like: contentFilter });
  }

  function handleBrandFilter(brandFilter, status) {
    let brand = filter.brand || [];
    if (status) {
      brand.push(brandFilter);
      setFilter({ ...filter, brand: brand });
    } else {
      let index = filter.brand.findIndex((item) => item === brandFilter);
      brand.splice(index, 1);
      setFilter({ ...filter, brand: brand });
    }
  }

  function handleSort(sort) {
    setFilter({ ...filter, _sort: "price", _order: sort });
  }

  let url = queryString.stringify(filter);
  return (
    <>
      <Header handleContentSearch={handleContentSearch} />
      <BodyPage
        handleTypeFilter={handleTypeFilter}
        url={url}
        filter={filter}
        handleContentFilter={handleContentFilter}
        handleBrandFilter={handleBrandFilter}
        handleRating={handleRating}
        handlePrice={handlePrice}
        clearFilter={clearFilter}
        handleSort={handleSort}
      />
    </>
  );
}
