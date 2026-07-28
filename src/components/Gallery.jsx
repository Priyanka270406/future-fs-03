import "./Gallery.css";

const galleryImages = [
  `${import.meta.env.BASE_URL}latte.png`,
  `${import.meta.env.BASE_URL}cappuccino.png`,
  `${import.meta.env.BASE_URL}iced-coffee.png`,
  `${import.meta.env.BASE_URL}butter-croissant.png`,
  `${import.meta.env.BASE_URL}chocolate-cake.png`,
  `${import.meta.env.BASE_URL}blueberry-muffin.png`,
  `${import.meta.env.BASE_URL}sandwich.png`,
  `${import.meta.env.BASE_URL}cookies.png`,
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2>Our Gallery</h2>

      <p>
        A glimpse of our handcrafted coffee, freshly baked treats,
        and cozy café moments.
      </p>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;