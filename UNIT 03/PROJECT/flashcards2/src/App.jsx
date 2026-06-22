import { useState } from "react";
import "./App.css";

const cardsDict = {
  title: "TRUE EMO TRIVIA",
  description: "PROVE IT WASN'T A PHASE",
  cards: [
    {
      question: "THE ALTERNATE TITLE FOR THIS SHOW, \"NULL COLLAPSE BY MONDAY\" REFERENCES THIS ALBUM BY THIS BAND",
      answer: "FULL COLLAPSE BY THURSDAY",
    },
    { question: "THIS BELOVED POST-HARDCORE BAND WAS ALSO POST-EMOCORE; COMPRISED OF ALUMNI FROM RITES OF SPRING, EMBRACE, AND DAG NASTY.",
      answer: "FUGAZI",
    },
    {
      question: "DIG DEEPER INTO EMO AND YOU'RE BOUND TO FIND BANDS LIKE INDIAN SUMMER AND EVERYONE ASKED ABOUT YOU WHOSE MORE SCATTERED DISCOGRAPHIES HAVE BEEN NEATLY COMPILED COURTESY OF THIS ARCHIVAL RECORD LABEL",
      answer: "NUMERO GROUP",
    },
    {
      question: "CLICK YOUR HEELS, THINK TO YOURSELF THIS TITLE OF THE HOTELIER'S FLAGSHIP RECORD, AND WAKE UP IN THE AMERICAN FOOTBALL HOUSE.",
      answer: "HOME LIKE NOPLACE IS THERE",
    },
    {
      question: "NOVEMBER 1997: MAXIMUM ROCKNROLL ISSUE #174 PRINTED THIS NAME FOR AN EXTRA-AGGRESSIVE EMO SUBGENRE COINED BY THE BAND IN/HUMANITY.",
      answer: "EMOVIOLENCE"
    },
  ],
};

const App = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [correct, setCorrect] = useState(null);
  const [noNext, setNoNext] = useState(false);
  const [noPrev, setNoPrev] = useState(true);

  const currentCard = cardsDict.cards[index];
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function flipCard() { setFlipped(!flipped); }

  const nextCard = async () => {
    if (index === cardsDict.cards.length - 1) {
      setNoNext(true);
      return;
    }
    setFlipped(false);
    await delay(100);
    setCorrect(null);
    setNoPrev(false);
    setIndex((prevIndex) => (prevIndex + 1));
    if (index + 1 === cardsDict.cards.length - 1) {
      setNoNext(true);
      return;
    }
    setNoNext(false);
  }

  const prevCard = async () => {
    if (index === 0) {
      setNoPrev(true);
      return;
    }
    setFlipped(false);
    await delay(100);
    setCorrect(null);
    setNoNext(false);
    setIndex((prevIndex) => (prevIndex - 1));
    if (index - 1 === 0) {
      setNoPrev(true);
      return;
    }
    setNoPrev(false);
  }

  const submitAnswer = () => {
    const userAnswer = document.querySelector('input[name="answer"]').value.trim().toLowerCase();
    const correctAnswer = currentCard.answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>{cardsDict.title}</h1>
        <p>{cardsDict.description}</p>
        <p>THERE ARE {cardsDict.cards.length} QUESTIONS IN TOTAL</p>
      </div>

      <div className={`flip-card ${flipped ? "flipped" : ""}`} onClick={flipCard}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{currentCard.question}</p>
          </div>

          <div className="flip-card-back">
            <p>{currentCard.answer}</p>
          </div>
        </div>
      </div>

      <div className="button-container">
        <button className={`back-button ${noPrev ? "no-prev" : ""}`} onClick={prevCard}>
          BACK
        </button>
        <button className={`next-button ${noNext ? "no-next" : ""}`} onClick={nextCard}>
          NEXT
        </button>
        <input
        type="text"
        name="answer"
        placeholder="ENTER YOUR ANSWER"
        className={`${correct === true ? "correct" : correct === false ? "incorrect" : ""}`}
        onChange={(e) => setCorrect(null)} />
        <button className="submit-button" onClick={submitAnswer}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default App;