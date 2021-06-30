import axios from "axios";
import { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";
import React from "react";
import { Pagination } from "antd";
import "antd/dist/antd.css";

export default function ContainerProduct(props) {
  const [product, setproduct] = useState([]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 19,
  });

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/product?${props.url}&_page=${pagination._page}&_limit=${pagination._limit}`
      )
      .then(function (response) {
        setproduct(response.data.data);
        setPagination(response.data.pagination);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [pagination._page, pagination._limit, props.url]);

  function onchangePagi(number, size) {
    setPagination({
      ...pagination,
      _limit: size,
      _page: number,
    });
  }
  return (
    <div className="col-9 container_body mt-5 pt-5">
      <select
        onChange={(e) => {
          props.handleSort(e.target.value);
        }}
      >
        <option value="" selected>
          sort
        </option>
        <option value="asc">price asc</option>
        <option value="desc">price desc</option>
      </select>
      {product.length === 0 ? (
        <h1>không có sản phẩm nào </h1>
      ) : (
        <h5>có {pagination._totalRows} sản phẩm</h5>
      )}

      <div className="d-flex flex-wrap">
        {product.map((item, index) => {
          return <ItemProduct key={`product-${index}`} item={item} />;
        })}
      </div>
      {product.length !== 0 && (
        <Pagination
          defaultCurrent={pagination._page}
          total={pagination._totalRows}
          onChange={onchangePagi}
        />
      )}
    </div>
  );
}
