import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3030")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {},
      );
  }, []);
  return <div className="App"></div>;
}

export default App;
