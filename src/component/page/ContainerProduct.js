import { useEffect } from "react";
import ItemProduct from "./ItemProduct";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, getData } from "../../redux/action";

export default function ContainerProduct() {
  const products = useSelector((state) => state.ProductReducer);
  const filter = products.filter;
  let pagination = products.pagination;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getData({ ...filter, _page: pagination._page, _limit: pagination._limit })
    );
  }, [filter, dispatch, pagination._page, pagination._limit]);

  let datas = [];
  datas = products.Product.map((item, index) => {
    return <ItemProduct key={index} item={item} />;
  });

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
        {products.Product.length !== 0 && (
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
      <div class="lds-hourglass" style={{ display: products.loading }}></div>
      <h5>có {pagination._totalRows} sản phẩm</h5>

      <div className="d-flex flex-wrap">{datas}</div>
      {products.Product.length !== 0 && (
        <Pagination
          defaultCurrent={pagination._page}
          total={pagination._totalRows}
          onChange={onChangePagi}
        />
      )}
    </div>
  );
}
