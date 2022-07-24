import React from "react";
import { useState } from "react";

export default function Data() {
  const [data, setData] = useState("");

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then((data) => {
        setData(() => {
          return data.results;
        });
      });
  }, []);

  console.log(data);
  return;
}
