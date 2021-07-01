import Sidebar from "../sidebar/sidebar";
import ContainerProduct from "./ContainerProduct";
export default function BodyPage(props) {
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
