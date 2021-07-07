import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/action";
import React from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.ProductReducer.filter);
  const typeingTimeOutRef = useRef(null);
  useEffect(() => {
    if (Object.keys(filter).length === 0) {
      setSearch("");
    }
  }, [filter]);

  function handleSearch(e) {
    setSearch(e.target.value);
    if (typeingTimeOutRef.current) {
      clearTimeout(typeingTimeOutRef.current);
    }
    typeingTimeOutRef.current = setTimeout(() => {
      dispatch(changeFilter({ ...filter, name_like: e.target.value }));
    }, 500);
  }
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
      <a href="/" className="navbar-brand">
        <img
          alt="logo"
          src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png"
        />
      </a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          onChange={(e) => {
            handleSearch(e);
          }}
          value={search}
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </nav>
  );
}
