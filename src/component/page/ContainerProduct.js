import { useEffect } from "react";
import ItemProduct from "./ItemProduct";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { changefilter, getdata } from "../../redux/action";

export default function ContainerProduct() {
  const product = useSelector((state) => state.ProductReducer);
  const filter = product.filter;
  let pagination = product.pagination;
  const dispatch = useDispatch();
  let filters = {
    ...filter,
    _page: pagination._page,
    _limit: pagination._limit,
  };

  useEffect(() => {
    dispatch(getdata(filters));
  }, [filter]);

  let datas = [];
  datas = product.Product.map((item, index) => {
    return <ItemProduct key={index} item={item} />;
  });

  function onchangePagi(number, size) {
    pagination = { ...pagination, _page: number, _totalRows: size };
    filters = {
      ...filter,
      _page: pagination._page,
      _limit: pagination._limit,
    };
    dispatch(getdata(filters));
  }
  return (
    <div className="col-9 container_body mt-5 pt-5">
      <select
        onChange={(e) => {
          dispatch(
            changefilter({ ...filter, _sort: "price", _order: e.target.value })
          );
        }}
      >
        <option value="" selected>
          choose method sort
        </option>
        <option value="asc">price asc</option>
        <option value="desc">pricen desc</option>
      </select>
      <div class="lds-hourglass" style={{ display: product.loading }}></div>
      {product.length === 0 ? (
        <h1>không có sản phẩm nào </h1>
      ) : (
        <h5>có {pagination._totalRows} sản phẩm</h5>
      )}

      <div className="d-flex flex-wrap">{datas}</div>
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
