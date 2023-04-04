import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button
          onClick={() => setIsAnswerShowing(!isAnswerShowing)}
          className="faq__icon"
        >
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
