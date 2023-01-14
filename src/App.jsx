import React from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Search from "./components/Search";


const App = () => {
  return (
    <>
      <div className="mainContainer lr-pad">
        <Search />
        <Card />
        <Pagination />
      </div>
    </>
  );
};

export default App;
