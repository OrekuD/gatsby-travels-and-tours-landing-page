import React, { ImgHTMLAttributes } from "react"
import "./Card.scss"

interface CardProps {
  title: string
  subtitle: string
  image: string
  buttonLabel: string
  reversed?: boolean
}

const Card = ({ title, subtitle, image, buttonLabel, reversed }: CardProps) => {
  return (
    <div
      className="card"
      style={{ flexDirection: reversed ? "row-reverse" : "row" }}
    >
      <img src={image} alt="" />
      <div className="content">
        <p className="label">{title}</p>
        <p className="subtitle">{subtitle}</p>
        <button className="main-btn">{buttonLabel}</button>
      </div>
    </div>
  )
}

export default Card
