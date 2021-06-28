import Sidebar from "../sidebar/sidebar";
import ContainerProduct from "./ContainerProduct";
export default function BodyPage(props) {
  return (
    <div className="row bodypage">
      <div className="   col-3">
        <Sidebar
          url2={props.url2}
          url={props.url}
          revicedContentFilter={props.revicedContentFilter}
          idactive={props.idactive}
          revicedTypeFilter={props.revicedTypeFilter}
          search={props.search}
          filter={props.filter}
          valuetypefilter={props.valuetypefilter}
          statustype={props.statustype}
          revicedBrandFilter={props.revicedBrandFilter}
        />
      </div>
      <ContainerProduct url={props.url} contentSearch={props.contentSearch} />
    </div>
  );
}
