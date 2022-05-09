import React, { useEffect, useState } from "react"

import {db} from "../../firebase"

import styled from "styled-components"

import Form from "../Form"
import Request from "../Request"

const Container = styled.section``

const Wrapper = styled.div`
  padding: 30px;
`

const Group = styled.div`
  margin: 0 -30px;
  margin-bottom: 30px;
`

const Title = styled.h2`
  color: #ef233c;
  font-family: "Concert One", sans-serif;
  font-size: 24px;
  text-transform: uppercase;
`

const Scroller = styled.div`
  border: 2px solid #8B4513;
  border-radius: 8px;
  height: 750px;
  overflow-y: scroll;
`

function Requests() {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    let requests = []
    db.collection("requests")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      setRequests(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])
  console.log(requests)
  return (
    <Container>
      <Wrapper>
        <Title>Latests request</Title>
        <Group>
          <Scroller>
            {requests.map(({firstName, lastName, date, request}, index) => {
              return (
                <Request
                  index={index}
                  date={date}
                  firstName={firstName}
                  lastName={lastName}
                  request={request}
                />
              )
            })}
          </Scroller>
        </Group>
        <Form />
      </Wrapper>
    </Container>
  )
}

export default Requests