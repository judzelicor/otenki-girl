import React from "react"

import styled from "styled-components"

import mobileLogo from "../../images/sunshine-girl-mobile.jpg"

import desktopLogo from "../../images/sunshine-girl-logo.jpg"

const Content = styled.header`
  max-width: ;
  width: 100%;

  @media only screen and (min-width: 986px) {
    max-width: 50%;
  }
`

const Desktop = styled.img`
  display: none;
  position: fixed;
  width: 100%;

  @media only screen and (min-width: 986px) {
    display: block;
    max-width: 450px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 540px;
  }
`

const Mobile = styled.img`
  display: block;
  max-width: 100%;
  position: relative;
  width: 100%;

  @media only screen and (min-width: 986px) {
    display: none;
  }
`

function Header() {
  return (
    <Content>
      <Mobile src={mobileLogo} alt="" />
      <Desktop src={desktopLogo} alt="" />
    </Content>
  )
}

export default Header