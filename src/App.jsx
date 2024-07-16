import { useEffect, useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.json())
      .then((json) => setData(json.results));
  });

  return (
    <div className="App">
      {data.map((el, id) => {
        return <Cards el={el} key={id} />;
      })}
    </div>
  );
}

export default App;
