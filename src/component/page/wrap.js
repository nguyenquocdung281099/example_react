import Header from "./header";
import BodyPage from "./bodyPage";
import { useState } from "react";
import { URL_PRODUCT } from "../../const";
export default function Wrap() {
  let [url, setUrl] = useState(URL_PRODUCT + "?");
  let [url2, setUrl2] = useState(URL_PRODUCT + "?");

  let [filter, setfilter] = useState("");
  let [search, setsearch] = useState("");
  let [idactive, setidactive] = useState("");
  let [valuetypefilter, setvaluetypefilter] = useState([]);
  let [valuebrandfilter, setvaluebrandfilter] = useState([]);

  let [typefilters, settypefilters] = useState("");
  let [brandsfilters, setbrandsfilters] = useState("");

  let [statustype, setstatustype] = useState(false);

  console.log("url2", url2);
  function revicedContentSearch(contentSearch) {
    setsearch(contentSearch);
    let urls = `${URL_PRODUCT}?`;
    if (contentSearch !== "" && valuetypefilter === "") {
      setUrl(
        `${urls}name_like=${contentSearch}&categories_like=${filter}&${typefilters}&${brandsfilters}`
      );
      setUrl2(`${urls}name_like=${contentSearch}&categories_like=${filter}`);
    } else {
      setUrl(
        `${urls}name_like=${contentSearch}&categories_like=${filter}${typefilters}&${brandsfilters}`
      );
      setUrl2(`${urls}name_like=${contentSearch}&categories_like=${filter}`);
    }
  }

  function revicedTypeFilter(typeFilter, status) {
    let typecc = "";
    let urls = `${URL_PRODUCT}?name_like=${search}&categories_like=${filter}&${brandsfilters}`;
    setstatustype(status);
    if (status === true) {
      valuetypefilter.push(typeFilter);
      setvaluetypefilter([...valuetypefilter]);
    } else {
      let index = valuetypefilter.findIndex((item) => item === typeFilter);
      valuetypefilter.splice(index, 1);
      setvaluetypefilter([...valuetypefilter]);
    }
    valuetypefilter.forEach((item, index) => {
      typecc += `type=${item}&`;
    });
    settypefilters(typecc);
    setUrl(`${urls}&${typecc}`);
  }

  function revicedContentFilter(contentFilter, status, key) {
    console.log(typefilters);
    let urls = `${URL_PRODUCT}?`;
    setidactive(key);
    if (status) {
      if (contentFilter !== "") {
        setfilter(contentFilter);
        setUrl(
          `${urls}categories_like=${contentFilter}&name_like=${search}&${typefilters}`
        );
        setUrl2(`${urls}categories_like=${contentFilter}&name_like=${search}`);
      }
    } else {
      setfilter("");
      setUrl(`${urls}&name_like=${search}${typefilters}`);
      setUrl2(`${urls}&name_like=${search}&`);
      console.log(`${urls}&name_like=${search}${typefilters}`);
    }
  }

  function revicedBrandFilter(brandFilter, status) {
    let brandcc = "";
    let urls = `${URL_PRODUCT}?name_like=${search}&categories_like=${filter}${typefilters}&`;
    setstatustype(status);
    if (status === true) {
      valuebrandfilter.push(brandFilter);
      setvaluetypefilter([...valuebrandfilter]);
    } else {
      let index = valuebrandfilter.findIndex((item) => item === brandFilter);
      valuebrandfilter.splice(index, 1);
      setvaluebrandfilter([...valuebrandfilter]);
    }
    valuebrandfilter.forEach((item, index) => {
      brandcc += `brand=${item}`;
    });
    setbrandsfilters(brandcc);
    setUrl(`${urls}${brandcc}`);
  }
  return (
    <>
      <Header revicedContentSearch={revicedContentSearch} />
      <BodyPage
        revicedTypeFilter={revicedTypeFilter}
        url={url}
        url2={url2}
        revicedContentFilter={revicedContentFilter}
        idactive={idactive}
        search={search}
        filter={filter}
        statustype={statustype}
        valuetypefilter={valuetypefilter}
        revicedBrandFilter={revicedBrandFilter}
      />
    </>
  );
}
