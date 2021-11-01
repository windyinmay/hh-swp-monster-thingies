import React, { useEffect, useState } from "react";
import { CardList } from "./components/card-lists/card-list";
import { SearchBox } from "./components/search/search-box";
import "./App.css";

function App() {
  const [monster, setMonster] = useState([]);
  const [input, setInput] = useState("");
  const inputChange = (e) => {
    setInput(e.target.value);
  };
  const filteredMonsters = monster.filter((m) =>
    m.name.toLowerCase().includes(input.toLocaleLowerCase())
  );
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((results) => setMonster(results))
      .catch((err) => console.error(err));
  });
  return (
    <div className="App">
      <div className="back-ground">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search monsters" handleChange={inputChange} />
        <CardList monster={filteredMonsters}></CardList>
      </div>
    </div>
  );
}

export default App;
