import React from "react";
import { programs } from "../data";

const SectionHead = ({ icon, title, classname }) => {
  return (
    <div className={`section__head ${classname}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHead;
