import React, { useState } from "react";
import Play from "./Play";

export default function Main() {
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
        <Play />
      )}
    </div>
  );
}
