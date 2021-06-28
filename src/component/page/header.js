import { useState } from "react";

export default function Header(props) {
  let [contentSearch, setContentSearch] = useState("");

  function Search() {
    props.revicedContentSearch(contentSearch);
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
            setContentSearch(e.target.value);
          }}
          placeholder="Search"
          aria-label="Search"
        />
        <button type="button" className="btn btn-warning" onClick={Search}>
          Search
        </button>
      </form>
    </nav>
  );
}
