import React from "react";
import "./App.css";
import { Table } from "./components/table/table.component";
import { Map } from "./components/map/map.component";
import { routes } from "./constants/constants";

function App() {
  return (
    <div className="App">
      <Table routes={routes} />
      <Map />
    </div>
  );
}

export default App;
