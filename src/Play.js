import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function Quizz() {
  const [maindata, setMainData] = useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then((data) => {
        setMainData(() => {
          return data.results.map((item) => generateData(item));
        });
      });
  }, []);

  const generateData = (data) => {
    const answers = { ...data.incorrect_answers };
    const randomNumber = Math.floor(Math.random() * 4);
    answers.splice(randomNumber, 0, data.correct_answer);
    const answersAll = answers.map((item) => {
      return {
        answers: item,
      };
    });
    return {
      ...data,
      answers: answersAll,
      id: nanoid(),
    };
  };

  return;
}
