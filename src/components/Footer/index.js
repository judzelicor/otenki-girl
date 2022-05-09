import React from "react"

import styled from "styled-components"

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 7px 0;
  background-color: #ef233c;
  color: #fff;
`

const Wrapper = styled.div``

const Description = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
`

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Description>Handcrafted by Judz Philip Elicor | Design is taken from the anime movie "Weathering with You"</Description>
      </Wrapper>
    </Container>
  )
}

export default Footer