import React from "react";
import MinHeader from "../../components/MinHeader";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import HeaderImage from "../../images/header_bg_2.jpg";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <MinHeader title="Get in Touch" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eos
        dignissimos molestiae illo commodi, qui laborum amet eaque animi quae?
      </MinHeader>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:jseriki21@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="mailto:jseriki21@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="mailto:jseriki21@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Contact;
