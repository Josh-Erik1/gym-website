import "./trainings.css";
import MinHeader from "../../components/MinHeader";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Trainer from "../../components/Trainer";

import React from "react";

const Trainings = () => {
  return (
    <>
      <MinHeader title="Our Trainers" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        laborum laboriosam error ipsum dignissimos nesciunt impedit earum
        quisquam modi? Quidem, obcaecati officiis. Animi suscipit deserunt,
        eaque enim hic quis? Officia.
      </MinHeader>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebook />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainings;
