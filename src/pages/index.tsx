import React from "react"
import "../main.scss"
import {
  Header,
  Banner,
  Trending,
  FeaturedDestinations,
  Testimonials,
} from "../components"

const Home = () => (
  <>
    <div className="container">
      <Header />
      <Banner />
      <FeaturedDestinations />
      <Testimonials />
      <Trending />
    </div>
  </>
)

export default Home
