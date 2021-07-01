import { useEffect, useState } from "react";
import ItemNav from "../filterItem/itemNav";
import { useSelector } from "react-redux";

export default function NavList(props) {
  let [show, setshow] = useState(false);
  function handleshow() {
    setshow(!show);
  }
  let filter = useSelector((state) => state.ProductReducer.filter);
  useEffect(() => {
    console.log("helo", filter);
    if (Object.keys(filter).length === 0) {
      setshow(false);
    }
  }, [filter]);
  return (
    <div className="col-12">
      <ItemNav
        category={props.data.name}
        handleshow={handleshow}
        id={props.id}
      />
      {props.data.lv1 &&
        props.data.lv1.map((item, index) => {
          return (
            show === true && <NavList data={item} id={index} key={index} />
          );
        })}
    </div>
  );
}
