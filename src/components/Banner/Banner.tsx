import React from "react"
import "./Banner.scss"
import { Circle, Plus } from "../../svgs"

const locations = ["Geneva", "Milan", "Paris"]
const activities = ["Travelling", "Swimming", "Outdoor games"]
const grades = ["Grade 1", "Grade 2", "Grade 3"]
const regions = ["Region 1", "Region 2", "Region 3"]

const Banner = () => (
  <div className="banner">
    <div className="content">
      <div className="circle-1">
        <Circle size={20} />
      </div>
      <div className="circle-2">
        <Circle size={20} />
      </div>
      <div className="plus">
        <Plus size={20} />
      </div>
      <p className="label">Explore</p>
      <p className="subtitle">Holiday finder</p>
      <div className="line" />
      <div className="select-inputs">
        <div className="row">
          <select>
            <option>Location</option>
            {locations.map((location, index) => (
              <option value={location} key={index}>
                {location}
              </option>
            ))}
          </select>
          <select>
            <option>Activity</option>
            {activities.map((activity, index) => (
              <option value={activity} key={index}>
                {activity}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          <select>
            <option>Grade</option>
            {grades.map((grade, index) => (
              <option value={grade} key={index}>
                {grade}
              </option>
            ))}
          </select>
          <select>
            <option>Regions</option>
            {regions.map((region, index) => (
              <option value={region} key={index}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className="main-btn">Explore</button>
    </div>
    <img src={require("../../assets/images/banner.png")} alt="Banner" />
  </div>
)

export default Banner
