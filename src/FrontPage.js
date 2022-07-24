import React, { useState } from "react";
import Answers from "./Answers";

export default function FrontPage() {
  const [page, setPage] = useState(true);

  function handler() {
    setPage((item) => !item);
  }
  return (
    <div>
      {page ? (
        <div className="container">
          <h1>Quizzical</h1>
          <h2>Some description if needed</h2>
          <button onClick={handler}>Start quiz</button>
        </div>
      ) : (
        <Answers />
      )}
    </div>
  );
}
