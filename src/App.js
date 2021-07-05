import "./App.css";
import React from "react";
import Wrap from "./component/page/wrap";

function App() {
  return (
    <div className="App">
      <Wrap />
    </div>
  );
}

export default React.memo(App);
