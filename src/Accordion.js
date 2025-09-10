import { useState } from "react";
import "./Accordion.scss";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Accordion">
      <p className="question" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </p>

      <p className={`answer ${isOpen ? "open" : "closed"}`}>{answer}</p>
    </div>
  );
};

export default Accordion;
