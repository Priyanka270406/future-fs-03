import "./Testimonials.css";

const reviews = [
  {
    name: "Sahithi",
    text: "The coffee is absolutely amazing! The ambience is warm and relaxing. Highly recommended!",
  },
  {
    name: "Sameera",
    text: "One of the best cafés in town. The desserts are delicious and the staff is very friendly.",
  },
  {
    name: "Mounika",
    text: "Perfect place to work, read, or spend quality time with friends. Loved every sip!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Customers Say</h2>
      <p>Every smile and every review inspires us to serve better.</p>

      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">"{review.text}"</p>
            <h3>- {review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;