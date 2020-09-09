import React from "react"
import "./Footer.scss"
import {
  YouTube,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Logo,
} from "../../svgs"

const destinations = ["Africa", "Antartica", "Asia", "Europe", "America"]
const shop = [
  "Destination Guides",
  "Pictorial & Gifts",
  "Special Offers",
  "Delivery times",
  "FAQs",
]
const interests = [
  "Adventure Travel",
  "Art and Custure",
  "Wildlife And Nature",
  "Family holidays",
  "Food and drink",
]

const socialLinks = [
  <Twitter size={20} />,
  <Facebook size={9} />,
  <Instagram size={18} />,
  <LinkedIn size={20} />,
  <YouTube size={22} />,
]

const Footer = () => (
  <footer>
    <div className="row">
      <div className="wrapper">
        <div className="section">
          <Logo size={40} />
          <p className="advice">
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p className="text">&copy;2020 Thousand Sunny. All rights reserved</p>
        </div>
      </div>
      <div className="wrapper">
        <div className="section">
          <p className="label">Links</p>
          {destinations.map((link, index) => (
            <p className="link" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
      <div className="wrapper">
        <div className="section">
          <p className="label">Support</p>
          {shop.map((link, index) => (
            <p className="link" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
      <div className="wrapper">
        <div className="section">
          <p className="label">Links</p>
          {interests.map((link, index) => (
            <p className="link" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
    </div>
    <div className="social-links">
      {socialLinks.map((icon, index) => (
        <div key={index}>{icon}</div>
      ))}
    </div>
  </footer>
)

export default Footer
