import React, { useState } from "react";

export default function Answers() {
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

  const incorrect_answers = { ...data.incorrect_answers };
  console.log(incorrect_answers);

  return <div></div>;
}
