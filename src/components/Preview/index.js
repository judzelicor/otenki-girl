import React from "react"

import styled from "styled-components"

import "./Preview.styles.scss"

const Container = styled.section`
  background-color: #fffaea;
  padding: 30px;
`

const Wrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    overflow: hidden;

    &::before {
      padding-top: 56.25%;
      display: block;
      content: "";
    }
`

function Preview() {
  return (
    <Container>
      <Wrapper>
        <iframe width="410" height="231" src="https://www.youtube.com/embed/ps8qwWG8Uio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Wrapper>
    </Container>
  )
}

export default Preview 