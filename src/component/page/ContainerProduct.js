import axios from "axios";
import { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";
import { Pagination } from "antd";
import "antd/dist/antd.css";
export default function ContainerProduct(props) {
  let [product, setproduct] = useState([]);
  let [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 19,
  });

  useEffect(() => {
    axios
      .get(`${props.url}_page=${pagination._page}&_limit=${pagination._limit}`)
      .then(function (response) {
        setproduct(response.data.data);
        setPagination(response.data.pagination);
        console.log(props.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [pagination._page, pagination._limit, props.url]);

  let datas = [];
  datas = product.map((item, index) => {
    return <ItemProduct key={index} item={item} />;
  });

  function onchangePagi(number, size) {
    setPagination({
      ...pagination,
      _limit: size,
      _page: number,
    });
  }
  return (
    <div className="col-9 container_body">
      <h5>có {pagination._totalRows} sản phẩm</h5>
      <div className="d-flex flex-wrap">{datas}</div>
      <Pagination
        defaultCurrent={pagination._page}
        total={pagination._totalRows}
        onChange={onchangePagi}
      />
    </div>
  );
}
