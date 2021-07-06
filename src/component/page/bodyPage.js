import React from "react";
import Sidebar from "../sidebar/sideBar";
import ContainerProduct from "./ContainerProduct";
export default function BodyPage() {
  return (
    <>
      <div className="row bodypage">
        <div className="col-3">
          <Sidebar />
        </div>
        <ContainerProduct />
      </div>
    </>
  );
}
