import React from "react"

import styled from "styled-components"

import animatedSun from "../../images/animated-sun.gif"

import "./About.styles.scss"

const Image = styled.img`
  float: right;
  width: 100px;
`

function About() {
  return (
    <div>
      <section className="about">
        <h2 className={"about__heading"}>100% Sunshine Girl</h2>
        <Image src={animatedSun} alt="" />
        <p className="about__description">Do you wish that the rain would stop for your next event?</p>
        <p className="about__description">Drop a request below and 100% Sunshine Girl will bring you good weather!</p>
      </section>
      <section className="about">
        <h2 className={"about__heading"}>What is a sunshine girl?</h2>
        <p className="about__description">A sunshine girl (晴れ女 hare-onna) has the power to stop the rain and clear the skies with just a prayer. Hire 100% Sunshine Girl for your next event!</p>
      </section>
    </div>
  )
}

export default About