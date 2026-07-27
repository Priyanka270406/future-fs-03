import "./Gallery.css";

const galleryImages = [
  "/latte.png",
  "/cappuccino.png",
  "/iced-coffee.png",
  "/butter-croissant.png",
  "/chocolate-cake.png",
  "/blueberry-muffin.png",
  "/sandwich.png",
  "/cookies.png",
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