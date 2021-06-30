import { useEffect, useState } from "react";
import React from "react";
import ItemNav from "../filterItem/itemNav";
export default function NavList(props) {
  const [show, setshow] = useState(false);
  const { data, filter, id, handleContentFilter, idactive } = props;
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
        category={data.name}
        handleshow={handleshow}
        id={id}
        handleContentFilter={handleContentFilter}
        idactive={idactive}
      />
      {data.lv1 &&
        data.lv1.map((item, index) => {
          return (
            show === true && (
              <NavList
                filter={filter}
                idactive={idactive}
                data={item}
                id={index}
                key={`navlv1-${index}`}
                handleContentFilter={handleContentFilter}
              />
            )
          );
        })}
    </div>
  );
}
