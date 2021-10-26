import React, { useEffect, useState } from "react";
import { CardList } from "./components/card-lists/card-list";
import "./App.css";

function App() {
  const [monster, setMonster] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((results) => setMonster(results));
  });
  return (
    <div className="App">
      <CardList monster={monster}></CardList>
    </div>
  );
}

export default App;
