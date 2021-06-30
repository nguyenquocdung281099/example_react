import { useEffect, useState } from "react";
import React from "react";

import TypeFilterItem from "../filterItem/typeFilterItem";
import { getType } from "../function";

export default function Typefilter(props) {
  const [type, setType] = useState([]);
  const { filter, search, handleTypeFilter } = props;

  useEffect(() => {
    getType(filter, setType);
    // eslint-disable-next-line
  }, [filter]);

  return (
    <div className="p-3">
      {type.map((item) => (
        <TypeFilterItem
          handleTypeFilter={handleTypeFilter}
          type={item}
          key={`type${item.name}`}
          search={search}
          filter={filter}
        />
      ))}
    </div>
  );
}
