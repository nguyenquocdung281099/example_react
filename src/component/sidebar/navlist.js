import { useState } from "react";
import ItemNav from "./itemNav";
export default function NavList(props) {
  let [show, setshow] = useState();
  function handleshow() {
    setshow(!show);
  }
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
