import { useEffect } from "react";
import ItemProduct from "./ItemProduct";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter, getData } from "../../redux/action";
import { asynGetData } from "../../redux/thunk/thunk";

export default function ContainerProduct() {
  const ListProducts = useSelector((state) => state.ProductReducer);
  const filter = ListProducts.filter;
  let pagination = ListProducts.pagination;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      asynGetData({
        ...filter,
        _page: pagination._page,
        _limit: pagination._limit,
      })
    );
    // dispatch(asynGetData());
  }, [filter, dispatch, pagination._page, pagination._limit]);

  function onChangePagi(number, size) {
    pagination = { ...pagination, _page: number, _totalRows: size };
    dispatch(
      getData({
        ...filter,
        _page: pagination._page,
        _limit: pagination._limit,
      })
    );
  }
  return (
    <div className="col-9 container_body mt-5 pt-5">
      <div className="d-flex">
        {ListProducts.Product.length !== 0 && (
          <select
            className="ml-auto"
            onChange={(e) => {
              dispatch(
                changeFilter({
                  ...filter,
                  _sort: "price",
                  _order: e.target.value,
                })
              );
            }}
          >
            <option value="" selected>
              choose method sort
            </option>
            <option value="asc">price asc</option>
            <option value="desc">pricen desc</option>
          </select>
        )}
      </div>
      <div
        className="lds-hourglass"
        style={{ display: ListProducts.loading }}
      ></div>
      <h5>có {pagination._totalRows} sản phẩm</h5>

      <div className="d-flex flex-wrap">
        {ListProducts.Product.map((item, index) => (
          <ItemProduct key={index} item={item} />
        ))}
      </div>
      {ListProducts.Product.length !== 0 && (
        <Pagination
          defaultCurrent={pagination._page}
          total={pagination._totalRows}
          onChange={onChangePagi}
        />
      )}
    </div>
  );
}
