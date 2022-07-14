import React, { useState } from "react";

export default function Play() {
  const [quizz, setQuizz] = useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then((data) => {
        setQuizz(() => {
          return data.results.map((item) => {
            return (
              <div>
                <p>{item.question}</p>
                <p>{item.correct_answer}</p>
              </div>
            );
          });
        });
      });
  }, []);

  return (
    <div>
      <div className="questions">{quizz}</div>;
    </div>
  );
}
