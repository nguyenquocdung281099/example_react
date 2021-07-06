import { useEffect, useState } from "react";
import ItemNav from "../filterItem/itemNav";
import { useSelector } from "react-redux";
import React from "react";

export default function NavList(props) {
  const [show, setshow] = useState(false);
  const filter = useSelector((state) => state.ProductReducer.filter);

  function handleshow() {
    setshow(!show);
  }

  useEffect(() => {
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
