import React from "react"

import styled from "styled-components"

const Container = styled.div`
  transition: 300ms ease-in;
  &:hover {
    background-color: #F4F5F7;
    cursor: pointer;
    transform: scale(0.98);
  }
`

const Wrapper = styled.div`
  padding: 12px 30px;
  background-color: ${({index}) => index % 2 === 0 ? "#F4F5F7" : "#FFF"};
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

const Sender = styled.p`
  color: #495057;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
`

const Description = styled.p`
  color: #495057;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 700;
  max-width: 80%;
`

const Schedule = styled.h6`
  color: #6c757d;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
`

function Request({firstName, lastName, date, request, index}) {
  date = new Date(date.seconds * 1000).toLocaleDateString("en-US")
  const name = `${firstName} ${lastName.slice(0, 1)}.`
  return (
    <Container>
      <Wrapper index={index}>
        <Content>
          <Description>{request}</Description>
          <Schedule>{date}</Schedule>
        </Content>
        <Sender>{name}</Sender>
      </Wrapper>
    </Container>
  )
}

export default Request