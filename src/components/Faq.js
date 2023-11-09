import React, { useState } from "react";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";

function FAQ({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="item">
      <div className="faq-que-main">
        <div className="faq-question" onClick={toggleExpanded}>
          <img
            src={expanded ? minus : plus}
            className={`accordion-icon ${expanded ? "expanded" : "collapsed"}`}
          />
          <div className="accordion-que">{question}</div>
        </div>
       
      </div>
      {expanded && <div className="accordion-ans">{answer}</div>}
    </div>
  );
}

export default FAQ;
