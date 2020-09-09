import React, { ImgHTMLAttributes } from "react"
import "./Card.scss"
import { Plus, Circle } from "../../svgs"

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
      {reversed ? (
        <>
          <div className="icon plus-1">
            <Plus size={24} />
          </div>
          <div className="icon plus-2">
            <Plus size={24} />
          </div>
          <div className="icon circle-1">
            <Circle size={24} />
          </div>
        </>
      ) : (
        <>
          <div className="icon plus-3">
            <Plus size={24} />
          </div>
          <div className="icon plus-4">
            <Plus size={24} />
          </div>
          <div className="icon circle-2">
            <Circle size={24} />
          </div>
        </>
      )}
      <img src={image} alt={title} />
      <div className="content">
        <p className="label">{title}</p>
        <p className="subtitle">{subtitle}</p>
        <button className="main-btn">{buttonLabel}</button>
      </div>
    </div>
  )
}

export default Card
