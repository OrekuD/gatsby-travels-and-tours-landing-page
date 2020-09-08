import React from "react"
import "../main.scss"
import { Header, Banner, Trending, FeaturedDestinations } from "../components"

const Home = () => (
  <>
    <div className="container">
      <Header />
      <Banner />
      <FeaturedDestinations />
      <Trending />
    </div>
  </>
)

export default Home
