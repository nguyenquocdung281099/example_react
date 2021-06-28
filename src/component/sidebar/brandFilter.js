import axios from "axios";
import { useEffect, useState } from "react";
import BrandFilterItem from "./brandItem";

export default function BrandFilter(props) {
  let [valueSearchBrand, setvaluesearchBrand] = useState("");
  let [Brand, setBrand] = useState([]);

  function handleSearchBrand(e) {
    setvaluesearchBrand(e.target.value);
  }

  function checkHave(array, value) {
    return array.findIndex((item) =>
      item.name ? item.name === value : item === value
    );
  }
  useEffect(() => {
    async function fetchdata() {
      let url = props.url2;
      let data = await axios.get(url);
      data = data.data;
      let brand = [];
      data.forEach((itemd) => {
        let item = {};
        if (checkHave(brand, itemd.brand) === -1) {
          item = { name: itemd.brand, count: 1 };
          brand.push(item);
        } else {
          brand[checkHave(brand, itemd.brand)].count += 1;
        }
      });
      if (valueSearchBrand !== "") {
        brand = brand.filter(
          (item) => item.name.indexOf(valueSearchBrand) !== -1
        );
      }
      console.log(brand);

      brand.sort((a, b) => b.count - a.count);
      brand = brand.filter((item, key) => key < 5);
      setBrand(brand);
    }
    fetchdata();
    // eslint-disable-next-line
  }, [props.url2, valueSearchBrand]);
  return (
    <>
      <input
        type="text"
        value={valueSearchBrand}
        onChange={handleSearchBrand}
      />
      {Brand.map((item, index) => (
        <BrandFilterItem
          brand={item}
          key={index}
          revicedBrandFilter={props.revicedBrandFilter}
        />
      ))}
    </>
  );
}
