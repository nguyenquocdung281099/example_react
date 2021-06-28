import { useEffect, useState } from "react";
import ItemNav from "../filterItem/itemNav";
export default function NavList(props) {
  let [show, setshow] = useState(false);
  function handleshow() {
    setshow(!show);
  }
  useEffect(() => {
    if (Object.keys(props.filter).length === 0) {
      setshow(false);
    }
  }, [props.filter]);
  return (
    <div className="col-12">
      <ItemNav
        category={props.data.name}
        handleshow={handleshow}
        id={props.id}
        revicedContentFilter={props.revicedContentFilter}
        idactive={props.idactive}
      />
      {props.data.lv1 &&
        props.data.lv1.map((item, index) => {
          return (
            show === true && (
              <NavList
                filter={props.filter}
                idactive={props.idactive}
                data={item}
                id={index}
                revicedContentFilter={props.revicedContentFilter}
              />
            )
          );
        })}
    </div>
  );
}
