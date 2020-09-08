import React from "react"
import "./Trending.scss"

const stories = [
  {
    title: "The many benefits of taking a healing holiday",
    description:
      "‘Healing holidays’ are on the rise to help maximise your health and happines...",
    image: require("../../assets/images/story-1.png"),
  },
  {
    title: "The best Kyoto restaurant to try Japanese food",
    description:
      "From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...",
    image: require("../../assets/images/story-2.png"),
  },
  {
    title: "Skip Chichen Itza and head to this remote Yucatan",
    description:
      "It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...",
    image: require("../../assets/images/story-3.png"),
  },
  {
    title: "Surf’s up at these beginner spots around the world",
    description:
      "If learning to surf has in on your to-do list for a while, the good news is: it’s never too late...",
    image: require("../../assets/images/story-4.png"),
  },
]

const Trending = () => (
  <div className="trending">
    <p className="title">Trending stories</p>
    <div className="stories">
      {stories.map(({ title, description, image }, index) => (
        <div className="story-wrapper" key={index}>
          <div className="story">
            <img src={image} alt={title} />
            <div className="content">
              <p className="label">{title}</p>
              <p className="description">{description}</p>
              <p className="link">Read more</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Trending
