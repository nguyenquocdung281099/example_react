import React from "react";
import Sidebar from "../sidebar/sideBar";
import ContainerProduct from "./ContainerProduct";
export default function BodyPage(props) {
  return (
    <>
      <div className="row bodypage">
        <div className="col-3">
          <Sidebar
            url2={props.url2}
            url={props.url}
            handleContentFilter={props.handleContentFilter}
            filter={props.filter}
            handleTypeFilter={props.handleTypeFilter}
            valuetypefilter={props.valuetypefilter}
            handleBrandFilter={props.handleBrandFilter}
            handleRating={props.handleRating}
            handlePrice={props.handlePrice}
            clearFilter={props.clearFilter}
          />
        </div>

        <ContainerProduct
          url={props.url}
          contentSearch={props.contentSearch}
          handleSort={props.handleSort}
        />
      </div>
    </>
  );
}
