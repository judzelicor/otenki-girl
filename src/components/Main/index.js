import React from "react"

import styled from "styled-components"

import Header from "../Header"
import About from "../About"
import Requests from "../Requests"
import Forecast from "../Forecast"
import Preview from "../Preview"
import Details from "../Details"

const Content = styled.section`
  flex: 1;
  padding: 0 15px;
`

function Main() {
  return (
    <Content>
      <About />
      <Requests />
      <Forecast />
      <Preview />
      <Details />
    </Content>
  )
}

export default Main