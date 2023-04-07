import MinHeader from "../../components/MinHeader";
import "./about.css";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <MinHeader title="About Us" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est rerum nisi
        necessitatibus laudantium id fugiat quia eius ratione nihil dicta?
      </MinHeader>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Section Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolorem vitae explicabo ab, eveniet culpa sint! Dicta cupiditate
              laborum blanditiis quia, nihil mollitia. Tenetur voluptate
              asperiores ullam mollitia? Soluta, pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              eveniet dolore perspiciatis ut laborum molestias dolor soluta eius
              sunt illum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
              iste?
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolorem vitae explicabo ab, eveniet culpa sint! Dicta cupiditate
              laborum blanditiis quia, nihil mollitia. Tenetur voluptate
              asperiores ullam mollitia? Soluta, pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              eveniet dolore perspiciatis ut laborum molestias dolor soluta eius
              sunt illum.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolorem vitae explicabo ab, eveniet culpa sint! Dicta cupiditate
              laborum blanditiis quia, nihil mollitia. Tenetur voluptate
              asperiores ullam mollitia? Soluta, pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              eveniet dolore perspiciatis ut laborum molestias dolor soluta eius
              sunt illum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
              iste?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
