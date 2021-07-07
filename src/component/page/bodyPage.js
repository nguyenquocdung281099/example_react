import React from "react";
import SideBar from "../sidebar/sideBar";
import ContainerProduct from "./ContainerProduct";
export default function BodyPage() {
  return (
    <>
      <div className="row bodypage">
        <div className="col-3">
          <SideBar />
        </div>
        <ContainerProduct />
      </div>
    </>
  );
}
