import Sidebar from "../sidebar/sidebar";
import ContainerProduct from "./ContainerProduct";
export default function BodyPage(props) {
  return (
    <>
      <div className="row bodypage">
        <div className="col-3">
          <Sidebar
            url2={props.url2}
            url={props.url}
            revicedContentFilter={props.revicedContentFilter}
            filter={props.filter}
            revicedTypeFilter={props.revicedTypeFilter}
            valuetypefilter={props.valuetypefilter}
            revicedBrandFilter={props.revicedBrandFilter}
            revicedRating={props.revicedRating}
            revicedPrice={props.revicedPrice}
            clearFilter={props.clearFilter}
          />
        </div>

        <ContainerProduct
          url={props.url}
          contentSearch={props.contentSearch}
          revicedSort={props.revicedSort}
        />
      </div>
    </>
  );
}
