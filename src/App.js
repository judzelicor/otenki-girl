import React from "react"

import styled from "styled-components"

import "./App.module.scss"
import Footer from "./components/Footer"

import Header from "./components/Header"
import Main from "./components/Main"

const Container = styled.div`
  width: 100%;
  position: relative;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 30px;

  @media only screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media only screen and (min-width: 986px) {
    max-width: 920px;
    flex-direction: row;
  }

  @media only screen and (min-width: 1200px) {
    max-width :1140px;
  }
`

function App() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </Container>
  )
}

export default App