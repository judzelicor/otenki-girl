import React from "react"

import styled from "styled-components"

import rainyCloud from "../../images/animated-rainy-cloud.gif"

const Container = styled.section`
  padding: 30px;
  background-color: #fffaea;
  margin-bottom: 30px;
`

const Wrapper = styled.div`
`

const Title = styled.h2`
  color: #ef233c;
  font-family: "Concert One", sans-serif;
  font-size: 24px;
  margin-bottom: 16px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Image = styled.img`
  height: 50px;
`

const Day = styled.h6`
  align-items: center;
  color: #8B4513;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  justify-content: center;
`

const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function Forecast() {
  return (
    <Container>
      <Wrapper>
        <Title>Forecast</Title>
        {daysOfTheWeek.map((day) => {
          return (
            <Row>
              <Day>{day}</Day>
              <Image src={rainyCloud} alt="" />
            </Row>
          )
        })}
      </Wrapper>
    </Container>
  )
}

export default Forecast