import React from "react"
import "./FeaturedDestinations.scss"

const destinations = [
  {
    name: "Raja Ampat",
    country: "Indonesia",
    image: require("../../assets/images/destination-1.jpg"),
  },
  {
    name: "Fanjingshan",
    country: "China",
    image: require("../../assets/images/destination-2.jpg"),
  },
  {
    name: "Vevey",
    country: "Switzerland",
    image: require("../../assets/images/destination-3.jpg"),
  },
  {
    name: "Skadar",
    country: "Montegero",
    image: require("../../assets/images/destination-4.jpg"),
  },
]

const FeaturedDestinations = () => (
  <div className="destinations">
    <p className="title">Featured destinations</p>
    <div className="items">
      {destinations.map(({ name, country, image }, index) => (
        <div className="destination-wrapper" key={index}>
          <div className="destination">
            <img src={image} alt={name} />
            <div className="content">
              <p className="name">{name}</p>
              <p className="country">{country}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default FeaturedDestinations
