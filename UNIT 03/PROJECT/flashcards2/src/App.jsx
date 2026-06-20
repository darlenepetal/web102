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
      answer: "WHO ARE FUGAZI?",
    },
    {
      question: "DIG DEEPER INTO EMO AND YOU'RE BOUND TO FIND BANDS LIKE INDIAN SUMMER AND EVERYONE ASKED ABOUT YOU WHOSE MORE SCATTERED DISCOGRAPHIES HAVE BEEN NEATLY COMPILED COURTESY OF THIS ARCHIVAL RECORD LABEL",
      answer: "WHAT IS NUMERO GROUP?",
    },
    {
      question: "CLICK YOUR HEELS, THINK TO YOURSELF THIS TITLE OF THE HOTELIER'S FLAGSHIP RECORD, AND WAKE UP IN THE AMERICAN FOOTBALL HOUSE.",
      answer: "WHAT IS HOME LIKE NOPLACE IS THERE?",
    },
    {
      question: "NOVEMBER 1997: MAXIMUM ROCKNROLL ISSUE #174 PRINTED THIS NAME FOR AN EXTRA-AGGRESSIVE EMO SUBGENRE COINED BY THE BAND IN/HUMANITY.",
      answer: "WHAT IS EMOVIOLENCE?"
    },
  ],
};

const App = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const currentCard = cardsDict.cards[index];
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function flipCard() { setFlipped(!flipped); }

  const nextCard = async () => {
    let randomIndex = Math.floor(Math.random() * cardsDict.cards.length);

    while (randomIndex == index && cardsDict.cards.length > 1) {
      randomIndex = Math.floor(Math.random() * cardsDict.cards.length);
    }

    setFlipped(false);
    await delay(100);
    setIndex(randomIndex);
  }

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

      <button className="next-button" onClick={nextCard}>
        NEXT
      </button>
      <button className="back-button" onClick={backCard}>
        BACK
      </button>
    </div>
  );
}

export default App;