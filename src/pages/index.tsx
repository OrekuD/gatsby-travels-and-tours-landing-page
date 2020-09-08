import React from "react"
import "../main.scss"
import {
  Header,
  Banner,
  Trending,
  FeaturedDestinations,
  Testimonials,
  Footer,
  Card,
} from "../components"

const Home = () => (
  <>
    <div className="container">
      <Header />
      <Banner />
      <Card
        title="A new way to explore the world"
        buttonLabel="Learn more"
        subtitle="For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way"
        image={require("../assets/images/explore.png")}
      />
      <FeaturedDestinations />
      <Card
        reversed
        title="Guides by Thousand Sunny"
        buttonLabel="Download"
        subtitle="Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip."
        image={require("../assets/images/guide.png")}
      />
      <Testimonials />
      <Trending />
    </div>
    <Footer />
  </>
)

export default Home
