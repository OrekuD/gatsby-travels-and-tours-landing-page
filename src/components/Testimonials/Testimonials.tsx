import React from "react"
import "./Testimonials.scss"
import { Star } from "../../svgs"

const Testimonials = () => (
  <div className="testimonials">
    <p className="title">Testimonials</p>
    <div className="testimonial">
      <div className="content">
        <div className="rating">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star size={16} color="#FFBB0C" key={index} />
            ))}
        </div>
        <p className="review">
          “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus
          ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis
          nec”
        </p>
        <p className="name">Edward Newgate</p>
        <p className="role">Founder Circle</p>
      </div>
      <div className="image">
        <img src={require("../../assets/images/testimonial.png")} alt="" />
      </div>
    </div>
  </div>
)

export default Testimonials
