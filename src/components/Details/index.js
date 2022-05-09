import React from "react"

import styled from "styled-components"

const Container = styled.section``

const Wrapper = styled.div`
  text-align: center;
  padding: 30px;
`

const Title = styled.h2`
  color: #ef233c;
  font-family: "Concert One", sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 8px;
`

const Description = styled.p`
  color: #8B4513;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
`

const Link = styled.a`
  color: #007BFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

function Details() {
  return (
    <Container>
      <Wrapper>
        <Title>Weathering with You</Title>
        <Description>Find out more about <Link target="_blank" href="https://www.rottentomatoes.com/m/weathering_with_you">Weathering With You</Link>, the latest movie from Makoto Shinkai</Description>
      </Wrapper>
    </Container>
  )
}

export default Details