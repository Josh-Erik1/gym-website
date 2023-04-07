import "./gallery.css";
import HeaderImage from "../../images/header_bg_3.jpg";
import MinHeader from "../../components/MinHeader";

import React from "react";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(`../../images/gallery${i}.jpg`);
  }

  return (
    <>
      <MinHeader title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        ratione illum tenetur eveniet cupiditate a accusamus beatae, maxime
        mollitia, asperiores iste perspiciatis. Eius, praesentium quas!
      </MinHeader>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
