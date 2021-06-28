import Header from "./header";
import BodyPage from "./bodyPage";
import { useState } from "react";
import queryString from "query-string";

export default function Wrap() {
  const [filter, setfilter] = useState({});

  function clearFilter() {
    setfilter({});
  }

  function revicedContentSearch(contentSearch) {
    setfilter({ ...filter, name_like: contentSearch });
  }
  function revicedPrice(min, max) {
    let price = {};
    if (min !== "") {
      price = { price_gte: min };
    }
    if (max !== "") {
      price = { ...price, price_lte: max };
    }
    setfilter({ ...filter, ...price });
  }

  function revicedRating(rating, status) {
    setfilter({ ...filter, rating_gte: rating });
  }

  function revicedTypeFilter(typeFilter, status) {
    let Type = filter.type || [];
    if (status) {
      Type.push(typeFilter);
      setfilter({ ...filter, type: Type });
    } else {
      let index = filter.type.findIndex((item) => item === typeFilter);
      Type.splice(index, 1);
      setfilter({ ...filter, type: Type });
    }
  }

  function revicedContentFilter(contentFilter, status, key) {
    setfilter({ ...filter, categories_like: contentFilter });
  }

  console.log(filter);
  function revicedBrandFilter(brandFilter, status) {
    let Brand = filter.brand || [];
    if (status) {
      Brand.push(brandFilter);
      setfilter({ ...filter, brand: Brand });
    } else {
      let index = filter.brand.findIndex((item) => item === brandFilter);
      Brand.splice(index, 1);
      setfilter({ ...filter, brand: Brand });
    }
  }

  function revicedSort(sort) {
    setfilter({ ...filter, _sort: "price", _order: sort });
  }

  let url = queryString.stringify(filter);
  return (
    <>
      <Header revicedContentSearch={revicedContentSearch} />
      <BodyPage
        revicedTypeFilter={revicedTypeFilter}
        url={url}
        filter={filter}
        revicedContentFilter={revicedContentFilter}
        revicedBrandFilter={revicedBrandFilter}
        revicedRating={revicedRating}
        revicedPrice={revicedPrice}
        clearFilter={clearFilter}
        revicedSort={revicedSort}
      />
    </>
  );
}
