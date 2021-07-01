import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changefilter } from "../../redux/action";

export default function Header() {
  let [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.ProductReducer.filter);
  useEffect(() => {
    console.log("helo", filter);
    if (Object.keys(filter).length === 0) {
      setSearch("");
    }
  }, [filter]);
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
            setSearch(e.target.value);
            dispatch(changefilter({ ...filter, name_like: e.target.value }));
          }}
          value={search}
          placeholder="Search"
          aria-label="Search"
        />
        <button type="button" className="btn btn-warning" onClick={() => {}}>
          Search
        </button>
      </form>
    </nav>
  );
}
