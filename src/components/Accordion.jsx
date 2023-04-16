import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Collapse } from "react-collapse";

const Accordion = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState([0]);

  const openAccordion = (index) => {
    const isOpened = isOpen.includes(index);
    setIsOpen(
      isOpened ? isOpen.filter((i) => i !== index) : [...isOpen, index]
    );
  };
  return (
    <div className="pb-2 mt-5 border-b">
      <div
        onClick={() => openAccordion(index)}
        className="flex items-center justify-between cursor-pointer"
      >
        <h2
          className={`font-[900] ${
            isOpen.includes(index) ? "text-greek" : "text-black"
          } md:text-[1.7rem]`}
        >
          {title}
        </h2>
        {isOpen.includes(index) ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <Collapse isOpened={isOpen.includes(index)}>
        <p className="mt-3 font-medium text-base md:text-lg">{content}</p>
      </Collapse>
    </div>
  );
};

export default Accordion;
