import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "../styles/testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Users Say</h2>

      <div className="testimonial-item">
        <FaUserCircle className="testimonial-icon" />
        <div className="testimonial-content">
          <blockquote className="testimonial-text">
            "This chatbot has helped me feel heard and supported. I use it whenever I feel down."
          </blockquote>
          <p className="testimonial-name">- John</p>
        </div>
      </div>

      <div className="testimonial-item">
        <FaUserCircle className="testimonial-icon" />
        <div className="testimonial-content">
          <blockquote className="testimonial-text">
            "I love how easy it is to talk to the bot, and it’s comforting knowing someone is always there."
          </blockquote>
          <p className="testimonial-name">- Mary</p>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
