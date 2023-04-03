import React from "react";
import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
// import { SiOpenaigym } from "react-icons/si";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { SiOpenaigym } from "react-icons/si";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container progrm__container">
        <SectionHead icon={<FaCrown />} title="Programs" />

        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>
                  <SiOpenaigym />
                </span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn more <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
